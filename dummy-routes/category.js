const express = require('express');

const router = express.Router();

const model = require('../models/category');

const { categories } = require('./data');

router.post('/', (req, res, next) => {
  const { category, newCategory } = req.body;

  const index = categories.findIndex(categoryName => categoryName === category);
  categories[index] = newCategory;

  res.status(200).send('Complete to modify category name');
});

router.get('/', (req, res, next) => {
  const categories = ['todo', 'doing', 'done'];

  res.status(200).json({ categories });
});

module.exports = router;
