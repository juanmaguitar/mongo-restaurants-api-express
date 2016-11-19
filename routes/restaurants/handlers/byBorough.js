function byBorough(db, req, res) {

	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const { borough } = req.params;
	const filter = borough ? { borough } : null;

	const cursor = getCursor(collection, filter )

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

module.exports = byBorough;