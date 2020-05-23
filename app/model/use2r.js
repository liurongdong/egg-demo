'use strict';
module.exports = (sequelize, DataTypes) => {
  const Use2r = sequelize.define('Use2r', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Use2r.associate = function(models) {
    // associations can be defined here
  };
  return Use2r;
};