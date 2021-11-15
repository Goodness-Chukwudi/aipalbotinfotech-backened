// const Joi = require("joi");
// const mongoose = require("mongoose");

// const reactionSchema = {
// 	imgSource: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlength: 1,
// 		maxlength: 50,
// 	},
// 	userId: {
// 		type: String,
// 		required: true,
// 		minlength: 1,
// 	},
// };
// const Reaction = mongoose.model(
// 	"Reaction",
// 	new mongoose.Schema(reactionSchema)
// );

// const joiReactionSchema = Joi.object({
// 	imgSource: Joi.string().min(1).max(50).required(),
// 	isLiked: Joi.boolean().required(),
// });

// function validate(reaction) {
// 	return joiReactionSchema.validate(reaction, { convert: false });
// }

// module.exports = { reactionSchema, joiReactionSchema, Reaction, validate };
