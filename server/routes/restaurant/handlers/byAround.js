const Restaurant = require('../../../models/restaurant')

function byAround(req, res) {

	const options = req.locals.queryOptions;
	const { id } = req.params;

	Restaurant.findById(id)
		.then( ({ _doc }) => {

			const { km } = req.params;

			if (km) {

				const [longitude, latitude] = _doc.address.coord;
				const filterAround = getFilterCoord(latitude, longitude, km)

				Restaurant.paginate(filterAround, options)
					.then( data => res.json(data) )
					.catch( console.log )

			}

		})
		.catch( err => new Error(err) )

}

module.exports = byAround;


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