const sequelize = require("../util/database");
const { Sequelize, DataTypes } = require("sequelize");

const forgotpassword = sequelize.define("forgotpassword", {
	id: {
		type: DataTypes.UUID,

		allowNull: false,
		primaryKey: true,
	},
    active:{
        type:DataTypes.BOOLEAN,
    }


});
module.exports = forgotpassword;