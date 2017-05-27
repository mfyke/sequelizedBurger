// module.exports = function(sequelize, DataTypes) {
//   var burger = sequelize.define("burgers", {
//   	id: {
//   		type: DataTypes.INTEGER,
//   		primaryKey: true
//   	},
//     burger_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     date: DataTypes.DATE
//   });
//   return burger;
// };

module.exports = function(sequelize, Sequelize) {
 var burger = sequelize.define('burgers', {
  burger_name: {
   type: Sequelize.STRING,
   allowNull: false
  },
  devoured: {
   type: Sequelize.BOOLEAN,
   defaultValue: false
  }
 });
 return Burger;
};