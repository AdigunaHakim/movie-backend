const authRouter = require('./auth');
const moviesRouter = require('./movies');
const homeRouter = require('./home');
const commentRouter = require('./comment');
const { auth } = require('../middlewares');

module.exports = (app) => {
    app.use('/auth', authRouter);
    app.use(moviesRouter);
    app.use(auth, commentRouter);
    homeRouter(app);
};