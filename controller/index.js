const { getLogin } = require('./login-controller');
const { postSignUp } = require('./signup-controller');
const { getMovies, getMovieById } = require('./movies-controller')

module.exports = {
    getLogin,
    postSignUp,
    getMovies,
    getMovieById
}