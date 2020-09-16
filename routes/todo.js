const express = require('express');

const router = express.Router();

const util = require('../util/generator');

const model = require('../models/todo');

const { todoValidator } = require('../middlewares/validators');

router.post('/', async (req, res) => {
  const { content } = req.body;
  const { userId } = req.session;
  const todoId = util.getRandomString();
  const date = util.getCurrentDate();
  const category = 'todo';

  await model.addTodo(content, userId, todoId, date, category);

  res.status(200).send('Complete to add todo');
});

router.get('/', todoValidator, async (req, res) => {
  const { userId } = req.session;

  const todos = await model.getTodos(userId);
  res.status(200).json(todos);
});

router.post('/update', async (req, res) => {
  const { content: updatedContent, todoId } = req.body;

  await model.updateTodo(todoId, updatedContent);
  res.status(200).send('Complete updating todo');
});

router.post('/delete', async (req, res) => {
  const { todoId } = req.body;

  await model.deleteTodo(todoId);
  res.status(200).send('Complete deleting todo');
});

module.exports = router;
