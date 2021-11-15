const express = require("express");
const router = express();
const { validate } = require("../data/model/contact");
const sendContact = require("../data/storage/contact");

//Post comments
router.post("/", async (req, res) => {
	const { error, value } = validate(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
	} else {
		const result = await sendContact(value);
		res.status(200).send("Mail sent succesfully!");
	}
});

module.exports = router;
