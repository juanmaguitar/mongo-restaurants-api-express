const Account = require('../../../models/account')

function updateByMe(req, res) {

	const accountNewData = req.body;
	const { id } = req.user;

	Account
		.findByIdAndUpdate( id, { $set: accountNewData } )
		.then( accountUpdated => {
			res.sendStatus(200)
		})
		.catch( err => {
			console.log(err)
			res.sendStatus(500)
		})

}

module.exports = updateByMe;