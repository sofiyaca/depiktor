const Sequelize = require('sequelize');
const { SERVER, USER, PASSWORD } = require('./conf');

const sequelize = new Sequelize(
  SERVER,
  USER,
  PASSWORD, 
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