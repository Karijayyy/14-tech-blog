// referenced my homework 13 for this code
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
"tech_blog",
    "root",
    "root",
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      // database: 'tech_blog'
    }
  );
}

module.exports = sequelize;