"use strict"

const Restaurant = require('../../../models/restaurant')

function byCuisine(not, req, res) {

	const options = req.locals.queryOptions;

	const { cuisine } = req.params;
	let filter = cuisine ? { cuisine } : {};

	if ( cuisine && not ) {
		filter = { cuisine: { $ne: cuisine } }
	}

	Restaurant.paginate(filter, options)
		.then( data => res.json(data) )
		.catch( console.log )

}

module.exports = byCuisine;