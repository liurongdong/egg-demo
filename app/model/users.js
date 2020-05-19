/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('users', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    openId: {
      type: DataTypes.STRING(0),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'users'
  });

  Model.associate = function() {

  }

  return Model;
};
