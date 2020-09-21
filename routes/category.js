const express = require('express');

const router = express.Router();

const model = require('../models/category');

router.post('/', async (req, res, next) => {
  const { category, newCategory } = req.body;

  await model.modifyCategoryName(next)(category, newCategory);
  res.status(200).send('Complete to modify category name');
});

router.get('/', async (req, res, next) => {
  const { userId } = req.session;
  const categories = await model.getCategories(next)(userId);

  res.status(200).json({ categories });
});

module.exports = router;
