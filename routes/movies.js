const { Router } = require('express');
const { getMovies, getMovieById } = require('../controller');

const router = Router();

router
.get('/movies', getMovies)
.get('/movies/:id', getMovieById)

module.exports = router;