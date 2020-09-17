const express = require('express');

const router = express.Router();

const util = require('../util/generator');

const model = require('../models/todo');

const { todoValidator } = require('../middlewares/validators');

router.post('/', async (req, res, next) => {
  const { content } = req.body;
  const { userId } = req.session;
  const todoId = util.getRandomString();
  const date = util.getCurrentDate();
  const category = 'todo';

  await model.addTodo(next)(content, userId, todoId, date, category);

  res.status(200).send('Complete to add todo');
});

router.get('/', todoValidator, async (req, res, next) => {
  const { userId } = req.session;

  const todos = await model.getTodos(next)(userId);
  res.status(200).json(todos);
});

router.post('/update', async (req, res, next) => {
  const { content: updatedContent, todoId } = req.body;

  await model.updateTodo(next)(todoId, updatedContent);
  res.status(200).send('Complete updating todo');
});

router.post('/delete', async (req, res, next) => {
  const { todoId } = req.body;

  await model.deleteTodo(next)(todoId);
  res.status(200).send('Complete deleting todo');
});

router.post('/move', async (req, res, next) => {
  const { todoId, category } = req.body;

  await model.moveTodo(next)(todoId, category);
  res.status(200).send('Complete to move category');
});

module.exports = router;
