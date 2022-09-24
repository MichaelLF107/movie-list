/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
// eslint-disable-next-line no-undef
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/registerUser', 'UserController.registerUser')
Route.get('/users', 'UserController.getUsers')
Route.get('/users/:id', 'UserController.getUserById')
Route.delete('/deleteUser/:id', 'UserController.deleteUser')

Route.get('/movies', 'MovieController.getMovies')
Route.get('/movies/:id', 'MovieController.getMovieById')
Route.post('/registerMovie', 'MovieController.registerMovie')
Route.delete('/deleteMovie/:id', 'MovieController.deleteMovie')
Route.put('/setMovieWatched/:id', 'MovieController.setMovieWatched')
Route.put('/changeMoviePlatform/:id', 'MovieController.changeMoviePlatform')