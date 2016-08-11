var getCursor = require('../../_utils').getCursor;

function byCuisine(db, not, req, res ) {

	var filter;

	var restaurants = db.collection('restaurants');

	if (req.params && req.params.cuisine) {
		if ( not ) {
			filter = { cuisine: { $ne: req.params.cuisine } }
		}
		else {
			filter = { cuisine: req.params.cuisine }
		}

	}

	var cursor = getCursor(restaurants, req, filter )

	cursor.toArray(function(err, docs) {
			if (err) throw err;
			res.json(docs);
	});

}

module.exports = byCuisine;