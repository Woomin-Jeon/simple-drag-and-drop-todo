const express = require('express');

const router = express.Router();

const { getRandomString, getCurrentDate } = require('../util/generator');

const { addTodo, getTodos, updateTodo, deleteTodo } = require('../database/todo');

router.post('/', async (req, res) => {
  const { content } = req.body;
  const { userId } = req.session;
  const todoId = getRandomString();
  const date = getCurrentDate();
  const category = 'todo';

  await addTodo(content, userId, todoId, date, category);

  res.status(200).send('Complete to add todo');
});

router.get('/', async (req, res) => {
  const { userId } = req.session;

  if (!userId) {
    res.status(400).send('Invalid user');
  }

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
