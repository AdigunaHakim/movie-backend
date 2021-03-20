const { ObjectId } = require('bson');
const createError = require('http-errors');
const { Comment } = require('../model');

const postComment = (req, res, next) => {
    const movieId = req.params.movieId;

    if(!ObjectId.isValid(movieId)) {
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
        res.status(201).json({
            message: 'comment has been successfully created'
        });
    })
    .catch(err => {
        next(createError(500));
    });
}

const updateComment = (req, res, next) => {
    const commentId = req.params.commentId;

    if(!ObjectId.isValid(commentId)){
        return next(createError(400));
    }

    Comment.update(new ObjectId(commentId), req.body['text'])
    .then(() => {
        res.json({
            message: 'comment successfully updated'
        });
    })
    .catch(err => {
        next(createError(500));
    });
}

const deleteComment = (req, res, next) => {
    const commentId = req.params.commentId;

    if(!ObjectId.isValid(commentId)){
        return next(createError(400));
    }

    Comment.delete(new ObjectId(commentId))
    .then(() => {
        res.json({
            message: 'comment successfully deleted'
        });
    })
    .catch(err => {
        next(createError(500));
    });
}

module.exports = {
    postComment,
    updateComment,
    deleteComment
}