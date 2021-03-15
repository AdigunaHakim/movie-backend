const { User } = require('../model');
const createError = require('http-errors');

const getLogin = (req, res, next) => {
    res.send('welcome to login page');
};

const postLogin = (req, res, next) => {
    User.login(req.body)
    .then(result => {
        if(result instanceof Error){
            next(result);
        }

        res.json(result);
    })
    .catch(err => {
        next(createError(500));
    })
}
module.exports = {
    getLogin,
    postLogin
}