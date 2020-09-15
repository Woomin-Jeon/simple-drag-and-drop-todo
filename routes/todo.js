const express = require('express');

const router = express.Router();

const { getRandomString, getCurrentDate } = require('../util/generator');

const { addTodo } = require('../database/todo');

router.post('/add', async (req, res) => {
  const { content } = req.body;
  const { userId } = req.session;
  const todoId = getRandomString();
  const date = getCurrentDate();
  const category = 'todo';

  await addTodo(content, userId, todoId, date, category);

  res.status(200).send('Complete to add todo');
});

module.exports = router;
