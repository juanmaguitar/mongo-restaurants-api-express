var express = require('express');
var router = express.Router();

var byId = require('./handlers/byId');
var updateById = require('./handlers/updateById');
var byAround = require('./handlers/byAround');

function getRouter(db) {

	router.get('/:id', byId.bind(null, db) )
	router.post('/:id', updateById.bind(null, db) )
	router.get('/:id/around/:km', byAround.bind(null, db) )

	return router;

}

module.exports = getRouter;