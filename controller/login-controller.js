const { User } = require('../model');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const getLogin = (req, res, next) => {
    res.send('welcome to login page');
};

const postLogin = (req, res, next) => {
    User.login(req.body)
    .then(result => {
        if(result instanceof Error){
            next(result);
        }

        const secret = readFileSync('./private.key');
        const token = jwt.sign({_id: result._id, username: result.username}, secret);

        res.json({token});
    })
    .catch(err => {
        next(createError(500));
    })
}
module.exports = {
    getLogin,
    postLogin
}