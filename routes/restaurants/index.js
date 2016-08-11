var express = require('express');
var router = express.Router();

var params = require('../_params');

var getAll = require('./handlers/getAll');
var byBorough = require('./handlers/byBorough');
var byCuisine = require('./handlers/byCuisine');


function getRouter(db) {

	router.use( params )

	router.get('/', getAll.bind(null, db) )
	router.get('/borough/:borough', byBorough.bind(null, db) )

	router.get('/cuisine/:cuisine', byCuisine.bind(null, db, false) )
	router.get('/cuisine/not/:cuisine', byCuisine.bind(null, db, true) )

	return router;

}

module.exports = getRouter;