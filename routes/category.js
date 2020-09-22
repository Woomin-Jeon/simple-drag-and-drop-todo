const express = require('express');

const router = express.Router();

const model = require('../models/category');

router.post('/', async (req, res, next) => {
  const { category, newCategory } = req.body;
  const { userId } = req.session;

  await model.modifyCategoryName(next)(userId, category, newCategory);
  res.status(200).send('Complete to modify category name');
});

router.get('/', async (req, res, next) => {
  const { userId } = req.session;
  const categories = await model.getCategories(next)(userId);

  res.status(200).json({ categories });
});

module.exports = router;
