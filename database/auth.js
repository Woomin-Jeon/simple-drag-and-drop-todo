const connection = require('./');

const { checkError } = require('./util');

const checkExistingUserById = (id) => new Promise(resolve => {
  const query = `SELECT id from user where id='${id}'`;
  connection.query(query, (error, rows, fields) => {
    checkError(error);
    resolve(rows.length > 0);
  });
});

const addNewUser = (id, password) => new Promise(resolve => {
  const query = 'INSERT INTO user (id, password) VALUES(?, ?)';
  connection.query(query, [id, password], (error, rows, fields) => {
    checkError(error);
    resolve(true);
  });
});

const checkPassword = (id, password) => new Promise(resolve => {
  const query = `SELECT password from user where id='${id}'`;
  connection.query(query, (error, rows, fields) => {
    checkError(error);

    const [userInfo] = rows;
    userInfo ? resolve(password === userInfo.password) : resolve(false);
  });
});

module.exports = { checkExistingUserById, addNewUser, checkPassword };
