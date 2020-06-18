'use strict';

module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define('Technology', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Technology;
}

