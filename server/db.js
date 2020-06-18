const Sequelize = require('sequelize');
const { DB_SERVER, DB_USER, DB_PASSWORD } = require('./conf');

const sequelize = new Sequelize(
  DB_SERVER,
  DB_USER,
  DB_PASSWORD, 
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  },
});

const db = {};

module.exports = {
  Sequelize,
  sequelize,
  db,
}