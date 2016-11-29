const Account = require('../../../models/account')

function byId(req, res) {

	const { id } = req.params;

	Account.findById(id)
		.then( res.json )
		.catch( err => new Error(err) )

}

module.exports = byId;