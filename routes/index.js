const authRouter = require('./auth');
const moviesRouter = require('./movies');
const homeRouter = require('./home');
const { auth } = require('../middlewares')

module.exports = (app) => {
    app.use('/auth', authRouter);
    app.use(auth, moviesRouter);

    homeRouter(app);
};