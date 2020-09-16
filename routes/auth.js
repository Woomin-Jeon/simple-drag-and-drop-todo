const express = require('express');

const router = express.Router();

const model = require('../models/auth');

const { signupValidator, signinValidator } = require('../middlewares/validators');

router.post('/signup', signupValidator, async (req, res) => {
  const { id, password } = req.body;

  await model.addNewUser(id, password);
  res.status(200).send('Complete signup');
});

router.post('/signin', signinValidator, async (req, res) => {
  const { id } = req.body;

  req.session.userId = id;
  res.status(200).send('Complete signin');
});

router.post('/signout', (req, res) => {
  req.session.destroy();
  res.status(200).send('Complete signout');
});

module.exports = router;
