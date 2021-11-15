const { Contact } = require("../model/contact");
const mailer = require("../../utils/mailer");

async function sendContact(input) {
	const mail = {
		from: input.email,
		subject: input.title,
		sender: input.sender,
		text: input.message,
	};
	mailer(mail)
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err;
		});
}

module.exports = sendContact;
