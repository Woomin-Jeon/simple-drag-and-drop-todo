const express = require('express');

const router = express.Router();

const model = require('../models/category');

router.post('/', async (req, res, next) => {
  const { category, newCategory } = req.body;

  await model.modifyCategoryName(next)(category, newCategory);
  res.status(200).send('Complete to modify category name');
});

module.exports = router;
