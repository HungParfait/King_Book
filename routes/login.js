const express = require('express');
const router = express.Router();

const loginCheck = require('../app/controllers/Login.js');

router.use('/login/google-oauth', loginCheck.index);

module.exports = router;