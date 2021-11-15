// const Joi = require("joi");
// const mongoose = require("mongoose");

module.exports = {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 100,
	},
	comment: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 1000,
	},
};
// const Comment = mongoose.model("Comment", new mongoose.Schema(commentSchema));

// const joiCommentSchema = Joi.object({
// 	imgSource: Joi.string().min(1).max(50).required(),
// 	email: Joi.string().email().min(1).max(100).required(),
// 	comment: Joi.string().min(1).max(1000).required(),
// });

// function validate(comment) {
// 	return joiCommentSchema.validate(comment, { convert: false });
// }

// module.exports = { commentSchema, joiCommentSchema, Comment, validate };
