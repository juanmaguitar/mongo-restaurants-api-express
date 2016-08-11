var getCursor = require('../../_utils').getCursor;
var ObjectID = require('mongodb').ObjectID;

function byAround(db, req, res ) {

	var filterRest, filterAround;

	var restaurants = db.collection('restaurants');

	if (req.params && req.params.id) {
		filterRest = { _id: ObjectID(req.params.id) }
	}

	var cursorRest = getCursor(restaurants, req, filterRest )

	cursorRest.toArray(function(err, docs) {

			if (err) throw err;
			if (req.params && req.params.km) {

				var km = req.params.km;
				var longitude = docs[0].address.coord[0];
				var latitude = docs[0].address.coord[1];

				filterAround = getFilterCoord(latitude, longitude, km)
				cursorAround = getCursor(restaurants, req, filterAround )

				cursorAround.toArray(function(err, docs) {
					if (err) throw err;
					res.json(docs);
				});

			}

	});

}

// db.restaurants.ensureIndex({ "address.coord":"2dsphere"});

function getFilterCoord( latitude, longitude, km) {

	return {
		"address.coord" : {
			 $near: {
					 $geometry: {
							type: "Point" ,
							coordinates: [ longitude , latitude ]
					 },
					 $maxDistance: km*1000
				}
			}
		}

}

module.exports = byAround;