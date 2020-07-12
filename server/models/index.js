const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const {
  DB_PORT,
  DB_HOST,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_URL,
} = require(process.env.NODE_ENV === 'production'
  ? '../config.prod'
  : '../config.dev');

const basename = path.basename(__filename);
const db = {};
let sequelize;

if (DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    port: DB_PORT,
    host: DB_HOST,
    logging: false,
  });
} else {
  sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, '', {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.technology = require('./technology.js')(sequelize, Sequelize);
db.count = require('./count.js')(sequelize, Sequelize);

db.technology.hasMany(db.count, {});
db.count.belongsTo(db.technology);

module.exports = db;
