const Joi = require('@hapi/joi');

const schema = Joi.object({
    username: Joi.string().alphanum().required().min(5).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
    .message('Your password must be at least 8 character contains uppercase, lowercase, numeric and special character')
    .required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required()
});

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

module.exports = {
    schema,
    loginSchema
};