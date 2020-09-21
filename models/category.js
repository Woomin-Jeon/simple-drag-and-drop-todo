const connectPool = require('./');

const { checkError } = require('./util');

const getCategories = (next) => (userId) => new Promise((resolve, reject) => {
  connectPool(connection => {
    const query = `SELECT element FROM category WHERE userid=?`;
    connection.query(query, [userId], (error, rows, fields) => {
      checkError(error, reject);
      const [categoryString] = rows;
      const categories = categoryString.element.split(';');

      resolve(categories);
    });
  });
});

const modifyCategoryName = (next) => (category, newCategory) => {
  connectPool(connection => {
    const query = `UPDATE todo SET category=? where category=?`;
    connection.query(query, [newCategory, category]);
  });
};

module.exports = { modifyCategoryName, getCategories };
