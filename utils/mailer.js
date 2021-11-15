const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
module.exports = async function (mail) {
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD,
		},
	});
	var mailOptions = {
		from: mail.from,
		to: "aipalbotng@gmail.com",
		replyTo: mail.from,
		subject: mail.subject,
		text: mail.text,
		html: `<p> <h4>from ${mail.sender}: <a href="mailto:${mail.from}">${mail.from}</a></h4>
					${mail.text}
				</p>`,
	};

	await transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return error;
		} else {
			return "Email sent: " + info.response;
		}
	});
};
