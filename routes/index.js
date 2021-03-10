const authRouter = require('./auth');
const moviesRouter = require('./movies');

module.exports = (app) => {
    app.use('/auth', authRouter);
    app.use(moviesRouter);

    app.get("/", (req, res, next) => {
        res.redirect('/home');
    });
};