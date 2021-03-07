const express = require('express');
const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

//middleware
middlewares(app);

// routing
routes(app);

module.exports = app;