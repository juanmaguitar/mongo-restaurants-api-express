const Restaurant = require('../../../models/restaurant')

function updateById(req, res) {

	const restaurantNewData = req.body;
	delete restaurantNewData._id;

	const { id } = req.params;

	Restaurant
		.findByIdAndUpdate( id, { $set: restaurantNewData } )
		.then( restaurantUpdated => res.sendStatus(200) )
		.catch( err => {
			console.log(err)
			res.sendStatus(500)
		})

}

module.exports = updateById;