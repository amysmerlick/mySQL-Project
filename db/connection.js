const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "employee_db",
  "root",
  "Smerlick@1",
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;

/*const mysql = require('mysql');
const util = require('util');
require('dotenv')

require('dotenv').config();
const connection = mysql.createConnection({
    host: 'localhost',
    // Your port, if not 3306
    port: 3306,
    // Your username
    user: 'root',
    // Be sure to update with your own MySQL password!
    password: PROCESS.env.MYSQLPASSWORD,
    database: 'employee_db',
});

connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;*/