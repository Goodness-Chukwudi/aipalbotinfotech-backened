const { ImageDetail } = require("../model/imageDetail");

async function saveImageDetail(input) {
	const imageDetail = await getImageDetail(input.imgSource);
	if (imageDetail) {
		if (input.comment && !(await emailExists(input.comment.email))) {
			imageDetail.comments.push(input.comment);
		}

		if (input.reaction.isLiked) imageDetail.reactions++;
		await imageDetail.save();
		return getImageDetails();
	} else {
		let reaction = input.reaction.isLiked ? 1 : 0;
		await new ImageDetail({
			imgSource: input.imgSource,
			comments: input.comment,
			reactions: reaction,
		}).save();
		return getImageDetails();
	}
}

async function getImageDetails() {
	return await ImageDetail.find();
}

async function emailExists(inputEmail) {
	let email = await ImageDetail.findOne({ "comments.email": inputEmail });
	return email ? true : false;
}

async function getImageDetail(path) {
	return await ImageDetail.findOne({ imgSource: path });
}

module.exports = { saveImageDetail, getImageDetails };
