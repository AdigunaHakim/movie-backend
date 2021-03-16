const { getLogin, postLogin } = require('./login-controller');
const { postSignUp } = require('./signup-controller');
const { getMovies, getMovieById } = require('./movies-controller');
const { postComment } = require('./comment-controller');

module.exports = {
    getLogin,
    postLogin,
    postSignUp,
    getMovies,
    getMovieById,
    postComment
}