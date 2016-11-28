const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const prepareParams = require('./routes/_middleware/prepareParams');

const routerRestaurants = require('./routes/restaurants');
const routerRestaurant = require('./routes/restaurant');
const routerAuth = require('./routes/auth');
const routerS3 = require('./routes/s3');
const routerRoot = require('./routes/root');

const app = express();

app.use( morgan('dev') );
app.use( express.static( path.join(__dirname, '../client') ) )
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

app.use( prepareParams )

app.use('/restaurants', routerRestaurants )
app.use('/restaurant', routerRestaurant )
app.use('/auth', routerAuth )
app.use('/', routerS3 )
app.use( '/', cors(), routerRoot )

module.exports = app;