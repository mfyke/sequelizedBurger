module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
  	id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true
  	},
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  });
  return burger;
};
