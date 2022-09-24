// eslint-disable-next-line no-undef
const Movie = use('App/Models/Movie')

class MovieController {
    async registerMovie({ request, response }) {
        const res = request.all().res
        const movie = new Movie()
        movie.title = res.title
        movie.link = res.link
        movie.platform = res.platform
        movie.watched = res.watched
        movie.user_id = res.user_id
        movie.file = res.file
        movie.file_name = res.file_name
        await movie.save()
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(201).send(movie)
    }

    async getMovies({ response }) {
        const movies = await Movie.all()
        response.header("Access-Control-Allow-Origin", "*");
        return response.json(movies)
    }

    async getMovieById({ params, response }) {
        const result = await Movie
            .query()
            .where('user_id', parseInt(params.id))
            .fetch()
        response.header("Access-Control-Allow-Origin", "*");
        return response.send(result)
    }

    async deleteMovie({ params, response }) {
        const movie = await Movie.find(params.id)
        if (movie) {
            await movie.delete()
            return response.send(movie)
        }
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(404).send({ data: 'Resource not found' })
    }

    async setMovieWatched({ params, response }) {
        const movie = await Movie.find(params.id)
        if (movie) {
            movie.watched = true
            await movie.save()
            return response.send(movie)
        }
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(404).send({ data: 'Resource not found' })
    }

    async changeMoviePlatform({ params, request, response }) {
        const movie = await Movie.find(params.id)
        if (movie) {
            const { platform, link } = request.all()
            movie.platform = platform
            movie.link = link
            await movie.save()
            return response.send(movie)
        }
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(404).send({ data: 'Resource not found' })
    }
}

module.exports = MovieController
