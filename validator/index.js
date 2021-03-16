const { schema, loginSchema} = require('./user-validator');
const { commentSchema }= require('./comment-validator');

module.exports = {
    userValidator: schema,
    loginValidator: loginSchema,
    commentValidator: commentSchema
}