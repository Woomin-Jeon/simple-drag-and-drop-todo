const express = require('express');

const router = express.Router();

const { getRandomString, getCurrentDate } = require('../util/generator');

const { addTodo, getTodos, updateTodo, deleteTodo } = require('../database/todo');

const { todoValidator } = require('../middlewares/validators');

router.post('/', async (req, res) => {
  const { content } = req.body;
  const { userId } = req.session;
  const todoId = getRandomString();
  const date = getCurrentDate();
  const category = 'todo';

  await addTodo(content, userId, todoId, date, category);

  res.status(200).send('Complete to add todo');
});

router.get('/', todoValidator);
router.get('/', async (req, res) => {
  const { userId } = req.session;

  const todos = await getTodos(userId);
  res.status(200).send(todos);
});

router.post('/update', async (req, res) => {
  const { content: updatedContent, todoId } = req.body;

  await updateTodo(todoId, updatedContent);
  res.status(200).send('Complete updating todo');
});

router.post('/delete', async (req, res) => {
  const { todoId } = req.body;

  await deleteTodo(todoId);
  res.status(200).send('Complete deleting todo');
});

module.exports = router;
