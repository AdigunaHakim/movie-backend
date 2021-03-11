const createError = require('http-errors');

module.exports = (app) => {
    app.use((req, res, next) => {

        if(req === '/'){
            res.send('Welcome to home page');
        }

        // error not found handling, when path not found on route
        const error = createError(404);
        res.status(error.statusCode).send(error.message);
    })
}