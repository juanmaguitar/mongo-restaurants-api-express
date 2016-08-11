var getCursor = require('../../_utils').getCursor;

function byBorough(db, req, res) {

	var filter;

	var restaurants = db.collection('restaurants');

	if (req.params && req.params.borough) {
		filter = { borough: req.params.borough }
	}

	var cursor = getCursor(restaurants, req, filter )

	cursor.toArray(function(err, docs) {
			if (err) throw err;
			res.json(docs);
	});

}

module.exports = byBorough;