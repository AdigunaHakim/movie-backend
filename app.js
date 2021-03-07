const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    res.redirect('/home');
});

app.get('/home', (req, res, next) => {
    res.send('welcome to home page');
})

module.exports = app;