const connection = require('./');

const checkExistingUserById = (id) => {
  return new Promise(resolve => {
    connection.query(`SELECT id from user where id='${id}'`, (error, rows, fields) => {
      resolve(rows.length > 0);
    });
  });
};

const addNewUser = (id, password) => {
  new Promise(resolve => {
    connection.query(
      'INSERT INTO user (id, password) VALUES(?, ?)', [id, password], (error, rows, fields) => {
        resolve(true);
      });
  });
};

const checkPassword = (id, password) => {
  return new Promise(resolve => {
    connection.query(`SELECT password from user where id='${id}'`, (error, rows, fields) => {
      const [userInfo] = rows;

      if (!userInfo) {
        resolve(false);
        return;
      }

      const { password: userPassword } = userInfo;

      resolve(password === userPassword);
    });
  });
};

module.exports = { checkExistingUserById, addNewUser, checkPassword };
