function byCuisine(db, not, req, res ) {

	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const { cuisine } = req.params;
	let filter = cuisine ? { cuisine } : null;

	if ( cuisine && not ) {
		filter = { cuisine: { $ne: cuisine } }
	}

	const cursor = getCursor( collection, filter )

	cursor.toArray()
		.then ( docs => res.json(docs) )
		.catch( err => new Error(err) )

}

module.exports = byCuisine;