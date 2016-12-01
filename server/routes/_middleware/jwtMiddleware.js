const expressJwt = require('express-jwt') // to verify tokens

const SECRET = process.env.SECRET;
const jwtAuthMiddleware = expressJwt({ secret: SECRET })

module.exports = jwtAuthMiddleware;