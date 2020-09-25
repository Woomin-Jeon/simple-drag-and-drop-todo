const express = require('express');

const router = express.Router();

const model = require('../models/auth');

const { user } = require('./data');

router.post('/signin', (req, res) => {
  const { id, password } = req.body;

  const targetUser = user.find(u => u.id === id);

  if (targetUser.password !== password) {
    res.status(403).send('Unmatched id or password');
    return;
  }

  res.status(200).send('Complete signin');
});

module.exports = router;
