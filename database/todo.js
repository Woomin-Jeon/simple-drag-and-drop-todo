const connection = require('./');

const addTodo = (...elements) => {
  return new Promise(resolve => {
    connection.query(
      `INSERT INTO todo (content, userid, todoid, date, category) VALUES(?, ?, ?, ?, ?)`, elements, (error, rows, fields) => {
        resolve(true);
      });
  });
};

const getTodos = (userId) => {
  return new Promise(resolve => {
    connection.query(`SELECT * from todo where id='${userId}'`, (error, rows, fields) => {
      resolve(rows);
    });
  });
};

const updateTodo = (todoId, updatedContent) => {
  return new Promise(resolve => {
    connection.query(`UPDATE todo SET content='${updatedContent}' where todoid='${todoId}'`, (error, rows, fields) => {
      resolve(true);
    });
  });
};

module.exports = { addTodo, getTodos, updateTodo };
