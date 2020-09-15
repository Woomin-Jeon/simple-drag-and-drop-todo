const express = require('express');

const router = express.Router();

const {
  checkExistingUserById,
  addNewUser,
  checkPassword,
} = require('../database/auth');

router.post('/signup', async (req, res) => {
  const { id, password } = req.body;

  const existingUser = await checkExistingUserById(id);

  if (existingUser) {
    res.status(400).send('Already existing id');
    return;
  }

  await addNewUser(id, password);
  res.status(200).send('Complete signup');
});

router.post('/signin', async (req, res) => {
  const { id, password } = req.body;

  const validation = await checkPassword(id, password);

  if (!validation) {
    res.status(400).send('Unmatched password');
    return;
  }

  req.session.userId = id;
  res.status(200).send('Complete signin');
});

router.post('/signout', (req, res) => {
  req.session.destroy();
  res.status(200).send('Complete signout');
});

module.exports = router;
