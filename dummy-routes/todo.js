const express = require('express');

const router = express.Router();

const util = require('../util/generator');

const { todos } = require('./data');

const USER_ID = 'boost';

router.post('/', (req, res, next) => {
  const { content, category } = req.body;
  const todoid = util.getRandomString();
  const date = util.getCurrentDate();

  todos.push({ content, userId: USER_ID, todoid, date, category });

  res.status(200).send('Complete to add todo');
});

router.get('/', (req, res, next) => {
  res.status(200).json(todos);
});

router.post('/update', (req, res, next) => {
  const { content: updatedContent, todoId } = req.body;

  const target = todos.find(todo => todo.todoid === todoId);
  target.content = updatedContent;

  res.status(200).send('Complete updating todo');
});

router.post('/delete', (req, res, next) => {
  const { todoId } = req.body;

  const targetIndex = todos.find(todo => todo.todoid === todoId);
  todos.splice(targetIndex, 1);

  res.status(200).send('Complete deleting todo');
});

router.post('/move', (req, res, next) => {
  const { todoId, category: updatedCategory } = req.body;

  const target = todos.find(todo => todo.todoid === todoId);
  target.category = updatedCategory;

  res.status(200).send('Complete to move category');
});

module.exports = router;
