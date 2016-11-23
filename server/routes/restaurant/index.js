var express = require('express');
var router = express.Router();

var byId = require('./handlers/byId');
var updateById = require('./handlers/updateById');
var byAround = require('./handlers/byAround');

router.get('/:id', byId )
router.post('/:id', updateById )
router.get('/:id/around/:km', byAround )

module.exports = router;