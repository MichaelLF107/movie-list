'use strict'

const Movie = use('App/Models/Movie')

class MovieController {
    async registerMovie({ request, response }) {
        const { title, cover, link, platform, watched } = request.all()
        let { user_id } = request.all()
        if (user_id === undefined) {
            user_id = 1
        }
        const movie = await Movie.create({ title, cover, link, platform, watched, user_id })
        response.header("Access-Control-Allow-Origin", "*");
        return response.json(movie)
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
}

module.exports = MovieController
