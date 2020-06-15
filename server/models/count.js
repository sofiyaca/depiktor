'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('Count', {
  //id, date and foreign key defined by db
  count: {
    type: DataTypes.BIGINT,
  },
})
