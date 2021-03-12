const createError = require('http-errors');

module.exports = (app) => {
    app.use((req, res, next) => {

        if(req === '/'){
            res.send('Welcome to home page');
        }

        // error not found handling, when path not found on route
        next(createError(404));
    });
}