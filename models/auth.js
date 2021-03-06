const connectPool = require('./');

const { checkError } = require('./util');

const checkExistingUserById = (next) => (id) => new Promise((resolve, reject) => {
  connectPool(connection => {
    const query = `SELECT id from user where id=?`;
    connection.query(query, [id], (error, rows, fields) => {
      checkError(error, reject);
      resolve(rows.length > 0);
    });
    connection.release();
  });
}).catch(error => next(error));

const addNewUser = (next) => (id, password) => new Promise((resolve, reject) => {
  connectPool(connection => {
    const query = `INSERT INTO user (id, password) VALUES(?, ?)`;
    connection.query(query, [id, password], (error, rows, fields) => {
      checkError(error, reject);
      resolve(true);
    });
    connection.release();
  });
}).catch(error => next(error));

const checkPassword = (next) => (id, password) => new Promise((resolve, reject) => {
  connectPool(connection => {
    const query = `SELECT password from user where id=?`;
    connection.query(query, [id], (error, rows, fields) => {
      checkError(error, reject);

      const [userInfo] = rows;
      userInfo ? resolve(password === userInfo.password) : resolve(false);
    });
    connection.release();
  });
}).catch(error => next(error));

const checkIsAuthorOfTodo = (next) => (userId, todoId) => new Promise((resolve, reject) => {
  connectPool(connection => {
    const query = `SELECT userid from todo where todoid=?`;
    connection.query(query, [todoId], (error, rows, fields) => {
      checkError(error, reject);
      const [todo] = rows;
      todo ? resolve(userId === todo.userid) : resolve(false);
    });
    connection.release();
  });
}).catch(error => next(error));

module.exports = { checkExistingUserById, addNewUser, checkPassword, checkIsAuthorOfTodo };
