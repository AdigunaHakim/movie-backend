const { schema, loginSchema} = require('./user-validator')
module.exports = {
    userValidator: schema,
    loginValidator: loginSchema
}