const express = require('express');

const router = express.Router();

const { checkExistingUserById, addNewUser } = require('../database/auth');

router.post('/signup', async (req, res) => {
  const { id, password } = req.body;

  const validation = await checkExistingUserById(id);

  if (validation) {
    res.status(400).send('Already existing id');
    return;
  }

  await addNewUser(id, password);
  res.status(200).send('Complete signup');
});

module.exports = router;
