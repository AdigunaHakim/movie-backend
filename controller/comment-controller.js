const { ObjectId } = require('bson');
const createError = require('http-errors');
const { Comment } = require('../model');

const postComment = (req, res, next) => {
    const movieId = req.params.movieId;

    if(!ObjectId.isValid(movieId)){
        return next(createError(400));
    }

    const validateError = Comment.validate(req.body);
    if(validateError) {
        return next(validateError);
    }

    req.body.userId = new ObjectId(req.user['_id']);
    req.body.username = req.user['username'];
    req.body.movieId = new ObjectId(movieId);

    const comment = new Comment(req.body);
    
    comment.save()
    .then(() => {
        res.json({
            message: 'comment has been successfully created'
        });
    })
    .catch(err => {
        next(createError(500));
    });
}

module.exports = {
    postComment
}