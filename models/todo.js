const connection = require('./');

const { checkError } = require('./util');

const addTodo = (next) => (...elements) => new Promise((resolve, reject) => {
  const query = `INSERT INTO todo (content, userid, todoid, date, category) VALUES(?, ?, ?, ?, ?)`;
  connection.query(query, elements, (error, rows, fields) => {
    checkError(error, reject);
    resolve(true);
  });
}).catch(error => next(error));

const getTodos = (next) => (userId) => new Promise((resolve, reject) => {
  const query = `SELECT * from todo where userid=?`;
  connection.query(query, [userId], (error, rows, fields) => {
    checkError(error, reject);
    resolve(rows);
  });
}).catch(error => next(error));

const updateTodo = (next) => (todoId, updatedContent) => new Promise((resolve, reject) => {
  const query = `UPDATE todo SET content=? where todoid=?`;
  connection.query(query, [updatedContent, todoId], (error, rows, fields) => {
    checkError(error, reject);
    resolve(true);
  });
}).catch(error => next(error));

const deleteTodo = (next) => (todoId) => new Promise((resolve, reject) => {
  const query = `DELETE from todo where todoid=?`;
  connection.query(query, [todoId], (error, rows, fields) => {
    checkError(error, reject);
    resolve(true);
  });
}).catch(error => next(error));

const moveTodo = (next) => (todoId, category) => new Promise((resolve, reject) => {
  const query = `UPDATE todo SET category=? where todoid=?`;
  connection.query(query, [category, todoId], (error, rows, fields) => {
    checkError(error, reject);
    resolve(true);
  });
}).catch(error => next(error));

module.exports = { addTodo, getTodos, updateTodo, deleteTodo, moveTodo };
