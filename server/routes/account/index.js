const express = require('express');
const expressJwt = require('express-jwt') // to verify tokens

const router = express.Router();

//const byId = require('./handlers/byId');
const byMe = require('./handlers/byMe');
const updateByMe = require('./handlers/updateByMe');

const SECRET = process.env.SECRET;
const jwtAuthMiddleware = expressJwt({ secret: SECRET })

router.get('/me', jwtAuthMiddleware, byMe )
router.post('/me', jwtAuthMiddleware, updateByMe )

module.exports = router;