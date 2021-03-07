const morgan = require('morgan');
const { logger } = require('../config');

// add morgan library to wintson for stream log
module.exports = (app) => {
    app.use(morgan('combine', { stream: logger.stream }));
};