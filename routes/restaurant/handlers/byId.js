const ObjectID = require('mongodb').ObjectID;

function byId(db, req, res) {

	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const { id } = req.params;
	const filter = id ? { _id: ObjectID(id) } : null;

	const cursor = getCursor(collection, filter )


	collection.find(filter).toArray()
		.then( docs => res.json(docs) )
		.catch( err => new Error(err) )

}

module.exports = byId;