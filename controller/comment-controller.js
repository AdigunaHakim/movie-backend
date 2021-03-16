const { ObjectId } = require('bson');
const createError = require('http-errors');
const { Comment } = require('../model');

const postComment = (req, res, next) => {
    if(!ObjectId.isValid(req.param.movieId)){
        return next(createError(400));
    }
}

module.exports = {
    postComment
}