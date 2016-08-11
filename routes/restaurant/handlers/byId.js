var getCursor = require('../../_utils').getCursor;
var ObjectID = require('mongodb').ObjectID;

function byId(db, req, res) {

	var filter;

	var restaurants = db.collection('restaurants');

	if (req.params && req.params.id) {
		filter = { _id: ObjectID(req.params.id) }
	}

	var cursor = getCursor(restaurants, req, filter )

	cursor.toArray(function(err, docs) {
			if (err) throw err;
			res.json(docs);
	});

}

module.exports = byId;