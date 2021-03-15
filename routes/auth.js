const { Router } = require('express');
const { getLogin, postSignUp } = require('../controller');

const router = Router();

router
.get('/login', getLogin)
.post('/signup', postSignUp);

module.exports = router;