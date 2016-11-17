const express = require('express');
const router = express.Router();

const getAll = require('./handlers/getAll');
const byBorough = require('./handlers/byBorough');
const byCuisine = require('./handlers/byCuisine');

function getRouter(db) {

	router.get('/', getAll.bind(null, db) )
	router.get('/borough/:borough', byBorough.bind(null, db) )

	router.get('/cuisine/:cuisine', byCuisine.bind(null, db, false) )
	router.get('/cuisine/not/:cuisine', byCuisine.bind(null, db, true) )

	return router;

}

module.exports = getRouter;