/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_table', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'my_table'
  });
};
