const express = require("express");
const router = express();
const { validate } = require("../data/model/imageDetail");
const storage = require("../data/storage/imageDetail");

//Post comments
router.post("/", async (req, res) => {
	const { error, value } = validate(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
	} else {
		const imageDetails = await storage.saveImageDetail(value);
		res.status(200).send(imageDetails);
	}
});

//Get comments
router.get("/", async (req, res) => {
	const imageDetails = await storage.getImageDetails();
	res.status(200).send(imageDetails);
});

module.exports = router;
