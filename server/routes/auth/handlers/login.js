const jwt = require('jsonwebtoken')
const gravatar = require("gravatar");

function login(req, res) {

		const SECRET = process.env.SECRET;
		const { username, email, image } = req.user;

		const gravatarOptions = {
			size: 200,
			default: 'mm',
			protocol: 'https'
		}

		const gravatar_url = gravatar.url(email, gravatarOptions);
		const userPublicData = { username, email, image, gravatar: gravatar_url }

		var token = jwt.sign( userPublicData, SECRET, {
			expiresIn: 86400 // expires in 24 hours
		});

		res.status(200).json({
			success: true,
			message: 'Enjoy your token!',
			token: token
		});


}

module.exports = login