const { Router } = require('express');
const { postComment } = require('../controller');
const router = Router();

router.post('/createComment/:movieId', postComment);

module.exports = router;