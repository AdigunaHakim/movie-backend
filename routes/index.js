const authRouter = require('./auth');
const moviesRouter = require('./movies');
const homeRouter = require('./home');

module.exports = (app) => {
    app.use('/auth', authRouter);
    app.use(moviesRouter);

    homeRouter(app);
};