const ObjectID = require('mongodb').ObjectID;

function byId(db, req, res) {

	const restaurantNewData = req.body;
	const collection = db.collection('restaurants');
	const { id } = req.params;
	const filter = id ? { _id: ObjectID(id) } : null;
	console.log (filter)

	collection
		.update( filter, { $set: restaurantNewData } )
		.then( () => res.sendStatus(200) )
		.catch( () => res.sendStatus(500) )

}

module.exports = byId;