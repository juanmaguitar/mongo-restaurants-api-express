var getCursor = require('../../_utils').getCursor;

function getAll(db, req, res) {

	var restaurants = db.collection('restaurants');
	var cursor = getCursor( restaurants, req )

	cursor.toArray(function(err, docs) {
			if (err) throw err;
			res.json(docs);
	});

}

module.exports = getAll;