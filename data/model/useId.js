const mongoose = require("mongoose");
const userIdSchema = {
	userId: [
		{
			type: String,
		},
	],
};
const UserId = mongoose.model("UserId", new mongoose.Schema(userIdSchema));

module.exports = { userIdSchema, UserId };
