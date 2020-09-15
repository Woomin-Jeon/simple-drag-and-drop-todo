const connection = require('./');

const addTodo = (...elements) => {
  return new Promise(resolve => {
    connection.query(
      `INSERT INTO todo (content, userid, todoid, date, category) VALUES(?, ?, ?, ?, ?)`, elements, (error, rows, fields) => {
        resolve(true);
      });
  });
};

module.exports = { addTodo };
