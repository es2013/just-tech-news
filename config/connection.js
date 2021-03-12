//import the sequelize constructor from the library
const Sequelize = require('sequelize');

//installed dotenv package to store sql password and username
require('dotenv').config();

//create connection to our database, pass in your password etd
// const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
//     host:'localhost',
//     dialect: 'mysql',
//     port:3306
// });
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
