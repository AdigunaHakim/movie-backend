const express = require('express');
const middlewares = require('./middlewares');
const routes = require('./routes');
const logger = require('./config/logger');

const app = express();

// exit process when found exception
process.on('unhandledRejection', reason => {
    logger.error(reason);
    process.exit();
});

// middleware
middlewares(app);

// routing
routes(app);

// global error handling
app.use((err, req, res, next) => {
    logger.error(err.message);

    res.status(err.statusCode);
    res.json({
        status: 'error',
        message: err.message
    });
});

module.exports = app;