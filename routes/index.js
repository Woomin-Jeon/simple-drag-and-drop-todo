const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/todo', require('./todo'));
router.use('/category', require('./category'));

module.exports = router;
