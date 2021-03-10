const { Router } = require('express');
const { getLogin } = require('../controller');

const router = Router();

router
.get('/login', getLogin);

module.exports = router;