const Account = require('../../../models/account')

function updateById(req, res) {

	const accountNewData = req.body;
	delete accountNewData._id;

	const { id } = req.params;

	Account
		.findByIdAndUpdate( id, { $set: accountNewData } )
		.then( accountUpdated => res.sendStatus(200) )
		.catch( err => {
			console.log(err)
			res.sendStatus(500)
		})

}

module.exports = updateById;