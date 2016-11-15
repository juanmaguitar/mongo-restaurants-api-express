function byBorough(db, req, res) {

	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const { borough } = req.params;
	const filter = borough ? { borough } : null;

	const cursor = getCursor(collection, filter )

	cursor.toArray()
		.then( docs => res.json(docs) )
		.catch( err => new Error(err) )

}

module.exports = byBorough;