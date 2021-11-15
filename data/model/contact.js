const Joi = require("joi");
const mongoose = require("mongoose");

const contactSchema = {
	sender: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 100,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 100,
	},
	title: {
		type: String,
		trim: true,
		maxlength: 100,
	},
	message: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 1000,
	},
};
const Contact = mongoose.model("Contact", new mongoose.Schema(contactSchema));

const joiContactSchema = Joi.object({
	sender: Joi.string().min(1).max(100).required(),
	email: Joi.string().email().min(1).max(100).required(),
	title: Joi.string().max(100),
	message: Joi.string().min(1).max(1000).required(),
});

function validate(contact) {
	return joiContactSchema.validate(contact, { convert: false });
}

module.exports = { contactSchema, joiContactSchema, Contact, validate };
