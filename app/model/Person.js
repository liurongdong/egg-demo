/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Person', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isBetaMember: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Person'
  });
};
