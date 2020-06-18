'use strict';

module.exports = (sequelize, DataTypes) => {
  const Count = sequelize.define('Count', {
    total: {
      type: DataTypes.INTEGER,
    },
  });
  return Count;
};
