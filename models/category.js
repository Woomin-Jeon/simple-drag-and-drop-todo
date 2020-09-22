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

    await new Promise((resolve, reject) => {
      const query = `UPDATE todo SET category=? where category=?`;
      connection.query(query, [newCategory, category], (error, rows, fields) => {
        checkError(error, reject);
        resolve(true);
      });
    }).catch((error) => {
      connection.rollback();
      connection.release();
      next(error);
    });

    const categoryElement = await new Promise((resolve, reject) => {
      const query = `SELECT element FROM category where userid=?`;
      connection.query(query, [userId], (error, rows, fields) => {
        checkError(error, reject);
        const [data] = rows;
        resolve(data.element);
      });
    }).catch((error) => {
      connection.rollback();
      connection.release();
      next(error);
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
    }).catch((error) => {
      connection.rollback();
      connection.release();
      next(error);
    });

    connection.commit();
    connection.release();
    resolve(true);
  });
});

module.exports = { modifyCategoryName, getCategories };
