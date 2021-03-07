const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    res.json({
        "message" : "welcome to homepage"
    })
});

module.exports = app;