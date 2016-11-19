function byCuisine(db, not, req, res ) {

	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const { cuisine } = req.params;
	let filter = cuisine ? { cuisine } : null;

	if ( cuisine && not ) {
		filter = { cuisine: { $ne: cuisine } }
	}

	const cursor = getCursor( collection, filter )

	let total;

	collection
		.find(filter)
		.count()
		.then( totalFound => {
			total = totalFound;
			return cursor.toArray();
		})
		.then( docs => res.json({ total, docs}) )
		.catch( err => {throw err} )

}

module.exports = byCuisine;