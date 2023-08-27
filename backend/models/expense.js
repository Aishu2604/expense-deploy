const sequelize = require("../util/database")
const { Sequelize,DataTypes } = require("sequelize");
const expenseUser = sequelize.define('expenses', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	amount: {
		type: DataTypes.INTEGER,
	},
	description: {
		type: DataTypes.STRING,
	},
	category: {
		type: DataTypes.STRING,
	}
});

module.exports = { expenseUser };