var express = require('express');
var router = express.Router();

var signS3 = require('./handlers/signS3');

router.get('/sign-s3', signS3 )

module.exports = router;