const express = require("express");
const router = express();
const { validate } = require("../data/model/comments");
const storage = require("../data/storage/comment");

//Post comments
router.post("/", async (req, res) => {
	const { error, value } = validate(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
	} else {
		const comment = await storage.saveComment(value);
		res.status(200).send(comment);
	}
});

//Get comments
router.get("/", async (req, res) => {
	const comments = await storage.getComment();
	res.status(200).send(comments);
});

module.exports = router;
