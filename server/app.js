const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;

const prepareParams = require('./routes/_middleware/prepareParams');

const routerRestaurants = require('./routes/restaurants');
const routerRestaurant = require('./routes/restaurant');
const routerRoot = require('./routes/root');
const routerS3 = require('./routes/s3');

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
// const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;

const app = express();

app.use( morgan('dev') );
app.use( express.static( path.join(__dirname, '../client') ) )
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

app.use( prepareParams )

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: GOOGLE_CALLBACK_URL
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

app.use( routerS3 )
app.use('/restaurants', routerRestaurants )
app.use('/restaurant', routerRestaurant )
app.use( '/', routerRoot )


module.exports = app;