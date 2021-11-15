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
