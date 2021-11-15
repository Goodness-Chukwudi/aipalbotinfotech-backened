const { Reaction } = require("../model/reaction");

async function saveReaction(input, userId) {
	if (!(userId == "existingId")) {
		if (input.isLiked) {
			const reaction = await getReaction(input.imgSource);
			if (reaction) {
				reaction.reactions++;
				await reaction.save();
			} else {
				await new Reaction({
					imgSource: input.imgSource,
					reactions: 1,
				}).save();
			}
			saveUserId;
			return await Reaction.find();
		}
	}
}

async function getReaction(path) {
	return await Reaction.findOne({ imgSource: path });
}

async function getReactions() {
	return await Reaction.find();
}

module.exports = { saveReaction, getReaction, getReactions };
