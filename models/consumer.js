module.exports = function(sequelize, DataTypes){
	var Consumer = sequelize.define('Consumer', {
		name: {
			type: DataTypes.STRING
		}
	// },
	// {
	// 	classMethods: {
	// 		associate: function(models){
	// 			Consumer.hasMany(models.Burger, {
	// 				onDelete: 'cascade'
	// 			});
	// 		}
	// 	}
	});
	return Consumer;
};