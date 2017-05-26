module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
  	id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true
  	},
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: DataTypes.DATE
  });
  return burger;
};
