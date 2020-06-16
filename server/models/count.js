'use strict';

module.exports = (sequelize, DataTypes) => {
  const Count = sequelize.define('Count', {
    //id, date and foreign key defined by db
    total: {
      type: DataTypes.INTEGER,
    },
  });
  return Count;
}
