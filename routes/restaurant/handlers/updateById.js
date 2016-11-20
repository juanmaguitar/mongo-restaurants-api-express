const ObjectID = require('mongodb').ObjectID;

function updateById(db, req, res) {

	const restaurantNewData = req.body;
	delete restaurantNewData._id;

	const collection = db.collection('restaurants');
	const { id } = req.params;
	const filter = id ? { _id: ObjectID(id) } : null;

	collection
		.update( filter, { $set: restaurantNewData } )
		.then( data => res.sendStatus(200) )
		.catch( err => res.sendStatus(500) )

}

module.exports = updateById;