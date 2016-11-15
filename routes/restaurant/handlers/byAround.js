const ObjectID = require('mongodb').ObjectID;

function byAround(db, req, res ) {

	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const { id } = req.params;
	const filter = id ? { _id: ObjectID(id) } : null;


	const cursorRest = getCursor(collection, filter )

	cursorRest.toArray()
		.then( docs => {

			const { km } = req.params;

			if (km) {

				const [longitude, latitude] = docs[0].address.coord;
				const filterAround = getFilterCoord(latitude, longitude, km)

				const cursorAround = getCursor(collection, filterAround )

				cursorAround.toArray()
					.then( docs => res.json(docs) )
					.catch( err => new Error(err) )

			}

		})
		.catch( err => new Error(err) )

}

// db.restaurants.createIndex({ "address.coord":"2dsphere"});

function getFilterCoord( latitude, longitude, km) {

	const type = "Point";
	const coordinates = [ longitude , latitude ];

	return {
		"address.coord" : {
			 $near: {
					 $geometry: { type, coordinates },
					 $maxDistance: km*1000
				}
			}
		}

}

module.exports = byAround;