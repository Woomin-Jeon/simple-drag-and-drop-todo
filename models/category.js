const connectPool = require('./');

const { checkError } = require('./util');

const modifyCategoryName = (next) => (category, newCategory) => {
  connectPool(connection => {
    const query = `UPDATE todo SET category=? where category=?`;
    connection.query(query, [newCategory, category]);
  });
};

module.exports = { modifyCategoryName };
