const Restaurant = require('../../../models/restaurant')

function getAll(req, res) {

	const options = req.locals.queryOptions;

	Restaurant.paginate({}, options)
		.then( data => res.json(data) )
		.catch( console.log )

}

module.exports = getAll;