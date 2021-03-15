const { getLogin, postLogin } = require('./login-controller');
const { postSignUp } = require('./signup-controller');
const { getMovies, getMovieById } = require('./movies-controller')

module.exports = {
    getLogin,
    postLogin,
    postSignUp,
    getMovies,
    getMovieById
}