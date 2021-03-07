module.exports = (app) => {
    app.get("/", (req, res, next) => {
        res.redirect('/home');
    });
    
    app.get('/home', (req, res, next) => {
        res.send('welcome to home page');
    });
    
    app.get('/user/:id', (req, res, next) => {
        console.log('param : ', req.params);
        console.log('query : ', req.query);
        console.log('headers : ', req.get('host'));
        res.send('welcome to user page');
    });
};