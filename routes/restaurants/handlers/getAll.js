function getAll(db, req, res) {

	"use strict";

	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const cursor = getCursor( collection )

	let total;

	collection
		.find()
		.count()
		.then( totalFound => {
			total = totalFound;
			return cursor.toArray();
		})
		.then( docs => res.json({ total, docs}) )
		.catch( err => {throw err} )

}

module.exports = getAll;