const Restaurant = require('../../../models/restaurant')

function byBorough(req, res) {

	const options = req.locals.queryOptions;

	const { borough } = req.params;
	const filter = borough ? { borough } : {};

	Restaurant.paginate(filter, options)
		.then( data => res.json(data) )
		.catch( console.log )

}

module.exports = byBorough;