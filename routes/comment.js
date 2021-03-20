const { Router } = require('express');
const { postComment, updateComment, deleteComment } = require('../controller');
const router = Router();

router
.post('/createComment/:movieId', postComment)
.put('/editComment/:commentId', updateComment)
.delete('/deleteComment/:commentId', deleteComment);

module.exports = router;