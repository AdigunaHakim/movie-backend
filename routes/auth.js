const { Router } = require('express');
const { getLogin, postLogin, postSignUp } = require('../controller');

const router = Router();

router
.get('/login', getLogin)
.post('/login', postLogin)
.post('/signup', postSignUp);

module.exports = router;