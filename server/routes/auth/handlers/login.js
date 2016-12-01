const jwt = require('jsonwebtoken')

function login(req, res) {

		const SECRET = process.env.SECRET;
		const { _id: id, roles } = req.user;

		const userPublicData = { id, roles }
		console.log(userPublicData)
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