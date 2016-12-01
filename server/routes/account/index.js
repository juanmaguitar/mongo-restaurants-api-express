const express = require('express');
const jwtAuthMiddleware = require('../_middleware/jwtMiddleware')

const router = express.Router();

//const byId = require('./handlers/byId');
const byMe = require('./handlers/byMe');
const updateByMe = require('./handlers/updateByMe');

router.get('/me', jwtAuthMiddleware, byMe )
router.post('/me', jwtAuthMiddleware, updateByMe )

module.exports = router;