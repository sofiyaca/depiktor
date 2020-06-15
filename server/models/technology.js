'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('Technology', {
  //id, date defined by db automatically
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  }, 
  count: {
    type: DataTypes.BIGINT,
    allowNull: true
  }
})
