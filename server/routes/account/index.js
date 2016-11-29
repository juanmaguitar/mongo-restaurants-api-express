var express = require('express');
var router = express.Router();

var byId = require('./handlers/byId');
var updateById = require('./handlers/updateById');

router.get('/:id', byId )
router.post('/:id', updateById )

module.exports = router;