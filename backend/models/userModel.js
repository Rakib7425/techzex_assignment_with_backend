const mongoose = require("mongoose");
// {
// 	"name":"Abc",
// 	"email":"abc@abc.com",
// 	"password":"abc"
// }

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
