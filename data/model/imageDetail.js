const Joi = require("joi");
const mongoose = require("mongoose");
const commentSchema = require("./comments");

const imageDetailSchema = {
	imgSource: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 50,
	},
	comments: [
		{
			type: commentSchema,
		},
	],
	reactions: {
		type: Number,
		min: 0,
	},
};
const ImageDetail = mongoose.model(
	"ImageDetail",
	new mongoose.Schema(imageDetailSchema)
);

const joiImageDetail = Joi.object({
	imgSource: Joi.string().min(1).max(50).required(),
	comment: {
		email: Joi.string().email().min(1).max(100),
		comment: Joi.string().min(1).max(1000),
	},
	reaction: { isLiked: Joi.boolean().required() },
});

function validate(imgDetail) {
	if (!imgDetail.reaction) {
		return {
			error: { details: [{ message: "imgDetail.reaction is required" }] },
		};
	}
	if (imgDetail.comment) {
		if (!imgDetail.comment.email || !imgDetail.comment.comment)
			return {
				error: {
					details: [{ message: "comment and email is required" }],
				},
			};
	}
	return joiImageDetail.validate(imgDetail, { convert: false });
}

module.exports = { imageDetailSchema, joiImageDetail, ImageDetail, validate };
