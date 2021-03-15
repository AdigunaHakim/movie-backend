const morgan = require('morgan');
const { logger } = require('../config');
const express = require('express');

// add morgan library to wintson for stream log
module.exports = (app) => {
    app.use(morgan('common', { stream: logger.stream }));
    app.use(express.json());
};