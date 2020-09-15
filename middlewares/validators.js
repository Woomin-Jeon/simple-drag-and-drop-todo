const { checkExistingUserById, checkPassword } = require('../database/auth');

const signupValidator = async (req, res, next) => {
  const { id } = req.body;

  const existingUser = await checkExistingUserById(id);

  if (existingUser) {
    res.status(400).send('Already existing id');
    return;
  }

  next();
};

const signinValidator = async (req, res, next) => {
  const { id, password } = req.body;

  const validation = await checkPassword(id, password);

  if (!validation) {
    res.status(400).send('Unmatched password');
    return;
  }

  next();
};

module.exports = { signupValidator, signinValidator };
