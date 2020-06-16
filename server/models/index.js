'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const pg = require('pg');
const basename = path.basename(__filename);

const db = {};

// TODO: dynamically create db if not present
// const sequelize = (callback) => {
//   const dbName = 'depiktor_server_db';
//   const username = 'lazarova';
//   const password = '';
//   const host = 'localhost';

//   const conStringPri = 'postgres://' + username + ':' + password + '@' + host + '/postgres';
//   const conStringPost = 'postgres://' + username + ':' + password + '@' + host + '/' + dbName;

//   pg.connect(conStringPri, function(err, client, done) { 
//     // create the db and ignore any errors, for example if it already exists.
//     client.query('CREATE DATABASE ' + dbName, function(err) {
//         //db should exist now, initialize Sequelize
//         var sequelize = new Sequelize(conStringPost);
//         callback(sequelize);
//         client.end(); // close the connection
//     });
//   });
// } 

//OR

//create the sequelize instance, omitting the database-name arg
// const sequelize = new Sequelize("", "<db_user>", "<db_password>", {
//   dialect: "<dialect>"
// });

// return sequelize.query("CREATE DATABASE `<database_name>`;").then(data 
// => {
//   // code to run after successful creation.
// });

const sequelize = new Sequelize(
  'depiktor_server_db', //TODO: add a config file env variables 
  'lazarova',
  '', 
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

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.technology = require('./technology.js')(sequelize, Sequelize);
db.count = require('./count.js')(sequelize, Sequelize);

db.technology.hasMany(db.count);
db.count.belongsTo(db.technology);

module.exports = db;



 
