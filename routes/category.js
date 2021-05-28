const express = require('express');
const router = express.Router();

const categoryController = require('../app/controllers/CategoryController.js');

router.use('books/:category', categoryController.index);

module.exports = router;