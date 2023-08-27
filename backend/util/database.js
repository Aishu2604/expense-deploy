const sequelize = require("sequelize");

const Sequelize = new sequelize(process.env.SQL_DATABASE, process.env.SQL_USERNAME, process.env.SQL_PASSWORD, {
  dialect: process.env.SQL_DIALECT,
  host: process.env.SQL_HOST,
});

module.exports = Sequelize;



