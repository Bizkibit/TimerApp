'use strict';
module.exports = function (sequelize, DataTypes) {
  const Time = sequelize.define('Time', {
    current_time: DataTypes.INTEGER
  /*, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }*/});
  return Time;
};
