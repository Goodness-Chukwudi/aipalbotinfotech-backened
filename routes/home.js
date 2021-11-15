const express = require("express");
const router = express();
const storage = require("../data/storage/reaction");

//Get reactions
router.get("/", async (req, res) => {
	const reactions = await storage.getReactions();
	res.status(200).send(reactions);
});

module.exports = router;
