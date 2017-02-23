module.exports = function(sequelize, DataTypes){
	var Burger = sequelize.define('Burger', {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	//},
	// {
	// 	classMethods: {
	// 		associate: function(models){
	// 			Burger.belongsTo(models.Consumer, {
	// 				foreignKey: {
	// 					allowNull: false
	// 				}
	// 			});
	// 		}
	// 	}
	});
	return Burger;
};