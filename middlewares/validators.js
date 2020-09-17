const model = require('../models/auth');

const signupValidator = async (req, res, next) => {
  const { id } = req.body;

  const existingUser = await model.checkExistingUserById(next)(id);

  if (existingUser) {
    res.status(400).send('Already existing id');
    return;
  }

  next();
};

const signinValidator = async (req, res, next) => {
  const { id, password } = req.body;

  const validation = await model.checkPassword(next)(id, password);

  if (!validation) {
    res.status(400).send('Unmatched password');
    return;
  }

  next();
};

const loginValidator = (req, res, next) => {
  const { userId } = req.session;

  if (!userId) {
    res.status(400).send('Invalid user');
    return;
  }

  next();
};

const todoValidator = async (req, res, next) => {
  const { userId } = req.session;
  const { todoId } = req.body;

  const validation = await model.checkIsAuthorOfTodo(userId, todoId);

  if (!validation) {
    res.statue(400).send('Not correct author');
    return;
  }

  next();
};

module.exports = { signupValidator, signinValidator, loginValidator, todoValidator };
