const Restaurant = require('../../../models/restaurant')

function byId(req, res) {

	const { id } = req.params;

	Restaurant.findById(id)
		.then( restaurant => res.json(restaurant) )
		.catch( err => new Error(err) )

}

module.exports = byId;