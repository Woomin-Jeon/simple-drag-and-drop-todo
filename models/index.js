const mysql = require('mysql');

require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST_IP,
  user: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  database: 'boostcamp_todolist',
  connectionLimit: 12,
});

const connectPool = (queryCallback) => {
  pool.getConnection((err, connection) => {
    queryCallback(connection);
  });
};


module.exports = connectPool;
