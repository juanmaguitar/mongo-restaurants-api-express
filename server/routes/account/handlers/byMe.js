const Account = require('../../../models/account')

function byMe(req, res) {

	console.log("req.user...");
	console.log(req.user);

	const { id } = req.user;

	Account.findById(id)
		.then( account => res.json(account) )
		.catch( err => new Error(err) )

}

module.exports = byMe;