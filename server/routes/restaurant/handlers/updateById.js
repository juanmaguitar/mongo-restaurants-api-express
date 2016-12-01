const Restaurant = require('../../../models/restaurant')

function updateById(req, res) {

	const restaurantNewData = req.body;
	delete restaurantNewData._id;

	console.log (req.user);
	/*
		TO-DO:
		- Do the action only for admin users
		- Show proper messages

	http://stackoverflow.com/questions/26837895/using-jwt-audience-field-for-authorization-roles

	http://stackoverflow.com/questions/26895219/verifying-roles-authentication-with-passport-js

	http://stackoverflow.com/questions/13546249/authorization-approaches-and-design-patterns-for-node-js-applications

	*/
	const { id } = req.params;

	Restaurant
		.findByIdAndUpdate( id, { $set: restaurantNewData } )
		.then( restaurantUpdated => res.sendStatus(200) )
		.catch( err => {
			console.log(err)
			res.sendStatus(500)
		})

}

module.exports = updateById;