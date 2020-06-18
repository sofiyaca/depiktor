'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const { Sequelize, sequelize, db } = require('./../db');

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

db.technology.hasMany(db.count, {
});
db.count.belongsTo(db.technology);

module.exports = db;



 
