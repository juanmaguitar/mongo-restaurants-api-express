const express = require('express');
const jwtAuthMiddleware = require('../_middleware/jwtMiddleware')

const router = express.Router();

const byId = require('./handlers/byId');
const updateById = require('./handlers/updateById');
const byAround = require('./handlers/byAround');

router.get('/:id', byId )
router.post('/:id', jwtAuthMiddleware, updateById )
router.get('/:id/around/:km', byAround )

module.exports = router;