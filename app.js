require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
require("express-async-errors");
const mongoose = require("mongoose");
const log = require("./utils/errorLogger");

app.use(express.json());
app.use(helmet());
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	if (req.method === "OPTIONS") {
		res.status(200).statusMessage = "OK";
	}
	next();
});
// app.use("/", require("./routes/home"));
// app.use("/comments", require("./routes/comments"));
// app.use("/reactions", require("./routes/reaction"));
app.use("/imageDetail", require("./routes/imageDetail"));
app.use("/contact", require("./routes/contact"));
app.use(require("./middleWare/errorHandler"));
app.use((err, req, res, next) => {
	log(err);
});

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
