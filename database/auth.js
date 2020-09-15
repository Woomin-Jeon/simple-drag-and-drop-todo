const connection = require('./');

const checkExistingUserById = (id) => {
  return new Promise(resolve => {
    connection.query(`SELECT id from user where id='${id}'`, (error, rows, fields) => {
      resolve(rows.length > 0);
    });
  });
};

module.exports = { checkExistingUserById };
