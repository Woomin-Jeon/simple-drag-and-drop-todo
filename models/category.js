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

const modifyCategoryName = (next) => (userId, category, newCategory) => new Promise(resolve => {
  connectPool(async connection => {
    connection.beginTransaction();

    try {
      await new Promise((resolve, reject) => {
        const query = `UPDATE todo SET category=? where category=? and userid=?`;
        connection.query(query, [newCategory, category, userId], (error, rows, fields) => {
          checkError(error, reject);
          resolve(true);
        });
      });

      const categoryElement = await new Promise((resolve, reject) => {
        const query = `SELECT element FROM category where userid=?`;
        connection.query(query, [userId], (error, rows, fields) => {
          checkError(error, reject);
          const [data] = rows;
          resolve(data.element);
        });
      });

      const categories = categoryElement.split(';');
      const targetIndex = categories.indexOf(category);
      categories[targetIndex] = newCategory;

      const modifiedCategoryElement = categories.join(';');

      await new Promise((resolve, reject) => {
        const query = `UPDATE category SET element=? where userid=?`;
        connection.query(query, [modifiedCategoryElement, userId], (error, rows, fields) => {
          checkError(error, reject);
          resolve(true);
        });
      });

      connection.commit();
    } catch (error) {
      connection.rollback();
      next(error);
    } finally {
      connection.release();
    }

    resolve(true);
  });
});

module.exports = { modifyCategoryName, getCategories };
