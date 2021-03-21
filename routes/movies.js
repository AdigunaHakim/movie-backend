const { Router } = require('express');
const { getMovies, getMovieById } = require('../controller');
const { auth } = require('../middlewares');

const router = Router();

router
.get('/movies', getMovies)
.get('/movies/detail/:id', auth, getMovieById)

module.exports = router;