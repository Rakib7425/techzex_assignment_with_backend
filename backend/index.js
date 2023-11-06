const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 8080;

mongoose
	.connect("mongodb://127.0.0.1:27017/user")
	.then((res) => {
		console.log("DB connected...");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());
app.use(cors());

const apiVersion = "/api/v1";

app.use(`${apiVersion}/user`, userRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
