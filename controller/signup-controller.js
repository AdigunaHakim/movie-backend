const { User } = require('../model');
const createError = require('http-errors');

const postSignUp = (req, res, next) => {
    const validate = User.validate(req.body);

    // validate body
    if(validate.error){
        const error = new Error(validate.error.message);
        error.statusCode = 400;
        return next(error);
    }

    // check existence data
    const user = new User(req.body);
    user.checkExistence()
    .then(result => {
        if(result.check){
            const error = new Error(result.message);
            error.statusCode = 409;
            return next(error);
        }

        user.save((err) => {
            if(err){
                return next(createError(500));
            }

            res.status(201).json({
                message: 'user has been successfully created'
            });
        });
    })
    .catch(err => {
        return next(createError(500));
    })
};

module.exports = {
    postSignUp
}