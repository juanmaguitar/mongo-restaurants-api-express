function getAll(db, req, res) {

	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const cursor = getCursor( collection )

	cursor.toArray()
		.then( docs => res.json(docs) )
		.catch( err => {throw err} )

}

module.exports = getAll;