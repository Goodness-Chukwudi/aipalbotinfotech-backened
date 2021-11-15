const express = require("express");
const router = express();
const { validate } = require("../data/model/reaction");
const storage = require("../data/storage/reaction");

//Post reactions
router.post("/", async (req, res) => {
	const { error, value } = validate(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
	} else {
		const reactions = await storage.saveReaction(value, "userId");
		res.status(200).send(reactions);
	}
});

//Get reactions
router.get("/", async (req, res) => {
	const reactions = await storage.getReactions();
	res.status(200).send(reactions);
});

module.exports = router;
