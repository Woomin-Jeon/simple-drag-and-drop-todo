const connection = require('./');

const { checkError } = require('./util');

const checkExistingUserById = (next) => (id) => new Promise((resolve, reject) => {
  const query = `SELECT id from user where id='${id}'`;
  connection.query(query, (error, rows, fields) => {
    checkError(error, reject);
    resolve(rows.length > 0);
  });
}).catch(error => next(error));

const addNewUser = (next) => (id, password) => new Promise((resolve, reject) => {
  const query = `INSERT INTO user (id, password) VALUES('${id}', '${password}')`;
  connection.query(query, (error, rows, fields) => {
    checkError(error, reject);
    resolve(true);
  });
}).catch(error => next(error));

const checkPassword = (next) => (id, password) => new Promise((resolve, reject) => {
  const query = `SELECT password from user where id='${id}'`;
  connection.query(query, (error, rows, fields) => {
    checkError(error, reject);

    const [userInfo] = rows;
    userInfo ? resolve(password === userInfo.password) : resolve(false);
  });
}).catch(error => next(error));

const checkIsAuthorOfTodo = (next) => (userId, todoId) => new Promise((resolve, reject) => {
  const query = `SELECT userid from todo where todoid='${todoId}'`;
  connection.query(query, (error, rows, fields) => {
    checkError(error, reject);
    const [todo] = rows;
    todo ? resolve(userId === todo.userid) : resolve(false);
  });
}).catch(error => next(error));

module.exports = { checkExistingUserById, addNewUser, checkPassword, checkIsAuthorOfTodo };
