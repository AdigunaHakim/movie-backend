const { Router } = require('express');

const router = Router();

router.post('/createComment/:movieId', postComment);

module.exports = router;