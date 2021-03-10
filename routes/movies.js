const { Router } = require('express');
const { getMovies } = require('../controller');

const router = Router();

router
.get('movies', getMovies);

module.exports = router;