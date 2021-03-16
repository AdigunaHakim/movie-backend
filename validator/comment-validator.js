const Joi = require('@hapi/joi');

const commentSchema = Joi.object({
    text: Joi.string().max(300).required()
});

module.exports = {
    commentSchema
}