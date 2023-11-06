const User = require("../models/userModel");

/**
 * Handles the registration of a new user by saving their name, email, and password to a database.
 */

const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		// console.log(name, email, password);

		if (name && email && password) {
			const newUser = new User({ name, email, password });
			const dbResponse = await newUser.save();
			res.status(201).send({ message: "User created successfully", data: dbResponse });
		} else {
			res.status(400).send({
				message: " All  fields are mandatory. (name, email and password)",
			});
		}
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: "Bad request", duplicateUser: error.keyValue });
	}
};

/**
 * Retrieves all users from the database and sends a JSON response with the users' data.
 */
const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json({
			status: "success",
			data: {
				users,
			},
		});
	} catch (error) {
		res.send(error);
	}
};

/**
 * Retrieves a user from the database based on the provided userId and returns it
 */
const getUser = async (req, res) => {
	try {
		const { userId } = req.params;

		const dbResponse = await User.findOne({ _id: userId });

		if (!dbResponse) {
			return res.status(404).json({
				message: `no user found, id : ${userId}`,
				status: "not found",
			});
		}
		res.status(200).json({
			status: "success",
			data: {
				user: dbResponse,
			},
		});
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	registerUser,
	getAllUsers,
	getUser,
};
