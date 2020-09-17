const connection = require('./');

const { checkError } = require('./util');

const addTodo = (next) => (...elements) => new Promise(resolve => {
  const query = `INSERT INTO todo (content, userid, todoid, date, category) VALUES(?, ?, ?, ?, ?)`;
  connection.query(query, elements, (error, rows, fields) => {
    checkError(error);
    resolve(true);
  });
}).catch(error => next(error));

const getTodos = (next) => (userId) => new Promise(resolve => {
  const query = `SELECT * from todo where userid='${userId}'`;
  connection.query(query, (error, rows, fields) => {
    checkError(error);
    resolve(rows);
  });
}).catch(error => next(error));

const updateTodo = (next) => (todoId, updatedContent) => new Promise(resolve => {
  const query = `UPDATE todo SET content='${updatedContent}' where todoid='${todoId}'`;
  connection.query(query, (error, rows, fields) => {
    checkError(error);
    resolve(true);
  });
}).catch(error => next(error));

const deleteTodo = (next) => (todoId) => new Promise(resolve => {
  const query = `DELETE from todo where todoid='${todoId}'`;
  connection.query(query, (error, rows, fields) => {
    checkError(error);
    resolve(true);
  });
}).catch(error => next(error));

module.exports = { addTodo, getTodos, updateTodo, deleteTodo };
