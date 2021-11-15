const { Comment } = require("../model/comments");

async function saveComment(input) {
	return await new Comment({
		imgSource: input.imgSource,
		email: input.email,
		comment: input.comment,
	}).save();
}

async function getComment() {
	return await Comment.find();
}

module.exports = { saveComment, getComment };
