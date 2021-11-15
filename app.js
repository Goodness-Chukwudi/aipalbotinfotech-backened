require("dotenv").config();
const express = require("express");
const app = express();
require("express-async-errors");
const mongoose = require("mongoose");
const log = require("./utils/errorLogger");

app.use(express.json());
// Add Access Control Allow Origin headers
app.use(require("./utils/headers"));
app.use("/imageDetail", require("./routes/imageDetail"));
app.use("/contact", require("./routes/contact"));
app.use(require("./middleWare/errorHandler"));
app.use((err, req, res, next) => {
	log(err);
});

app.use(require("helmet")());
app.use(require("compression")());

// Handle Exceptions

process.on("unhandledRejection", (err) => {
	log(err);
});

process.on("uncaughtException", (err) => {
	log(err);
});

//Connect to DB
mongoose
	.connect(process.env.DB_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("...connected to DB"))
	.catch((ex) => {
		throw ex;
	});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
