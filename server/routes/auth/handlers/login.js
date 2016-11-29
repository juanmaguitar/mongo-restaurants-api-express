const jwt = require('jsonwebtoken')

function login(req, res) {

		console.log("req.user...")
		console.log(req.user)

		const SECRET = process.env.SECRET;
		const { username, email, image } = req.user;

		const userPublicData = { username, email, image }
		console.log( "userPublicData..." )
		console.log( userPublicData )
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