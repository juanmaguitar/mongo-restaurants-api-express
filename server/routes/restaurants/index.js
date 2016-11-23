const express = require('express');
const router = express.Router();

const getAll = require('./handlers/getAll');
const byBorough = require('./handlers/byBorough');
const byCuisine = require('./handlers/byCuisine');

router.get('/', getAll )
router.get('/borough/:borough', byBorough )

router.get('/cuisine/:cuisine', byCuisine.bind(null, false) )
router.get('/cuisine/not/:cuisine', byCuisine.bind(null, true) )

module.exports = router;