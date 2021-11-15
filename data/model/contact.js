const Joi = require("joi");

const joiContactSchema = Joi.object({
	sender: Joi.string().min(1).max(100).required(),
	email: Joi.string().email().min(1).max(100).required(),
	title: Joi.string().max(100),
	message: Joi.string().min(1).max(1000).required(),
});

function validate(contact) {
	return joiContactSchema.validate(contact, { convert: false });
}

module.exports = { joiContactSchema, validate };
