const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST_IP,
  user: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  database: 'boostcamp_todolist',
});

connection.connect();

module.exports = connection;
