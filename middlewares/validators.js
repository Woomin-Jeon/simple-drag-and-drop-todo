const model = require('../models/auth');

const signupValidator = async (req, res, next) => {
  const { id } = req.body;

  const existingUser = await model.checkExistingUserById(id);

  if (existingUser) {
    res.status(400).send('Already existing id');
    return;
  }

  next();
};

const signinValidator = async (req, res, next) => {
  const { id, password } = req.body;

  const validation = await model.checkPassword(id, password);

  if (!validation) {
    res.status(400).send('Unmatched password');
    return;
  }

  next();
};

const todoValidator = (req, res, next) => {
  const { userId } = req.session;

  if (!userId) {
    res.status(400).send('Invalid user');
    return;
  }

  next();
};

module.exports = { signupValidator, signinValidator, todoValidator };
