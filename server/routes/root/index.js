const express = require('express');
const router = express.Router();
const Restaurant = require('../../models/restaurant')

router.get('/boroughs', (req,res) => {

	Restaurant.find().distinct('borough')
		.then( boroughs => res.json(boroughs) )
		.catch( err => new Error(err) )

})

router.get('/cuisines', (req,res) => {

	Restaurant.find().distinct('cuisine')
		.then( boroughs => res.json(boroughs) )
		.catch( err => new Error(err) )

})

module.exports = router;