const Joi = require('@hapi/joi');

const commentSchema = Joi.object({
    message: Joi.string().max(300).required()
});

module.exports = {
    commentSchema
}