const morgan = require('morgan');
const { logger } = require('../config');
const express = require('express');

// add morgan library to wintson for stream log
module.exports = {
    middleware: (app) => {
        app.use(morgan('common', { stream: logger.stream }));
        app.use(express.json());
    },
    auth: require('./auth')
}