const { getLogin } = require('./login-controller');
const { getMovies, getMovieById } = require('./movies-controller')

module.exports = {
    getLogin,
    getMovies,
    getMovieById
}