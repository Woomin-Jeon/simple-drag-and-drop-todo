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

module.exports = { addTodo, getTodos };
