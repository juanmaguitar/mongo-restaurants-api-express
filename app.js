"use strict";

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const aws = require('aws-sdk');

const config = require('./config');

const getRouterRestaurants = require('./routes/restaurants');
const getRouterRestaurant = require('./routes/restaurant');

const prepareParams = require('./routes/middleware/prepareParams');

const PORT = process.env.PORT || 3000;
const S3_BUCKET = process.env.S3_BUCKET;
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

let urlDB = config[ENVIRONMENT].db;

if (ENVIRONMENT === 'production') {
	const USER_DB = process.env.USER_DB;
	const PASS_DB = process.env.PASS_DB;
	urlDB = urlDB.replace("<%USER_DB%>", USER_DB)
	urlDB = urlDB.replace("<%PASS_DB%>", PASS_DB)
}

const app = express();

// set folder to serve static files => angular app
app.use( express.static('public') )

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded({ extended: false }) )

// parse application/json
app.use( bodyParser.json() )

app.use( prepareParams )

MongoClient.connect( urlDB )
	.then( (db) => {

		console.log("Connected to DB...")

		app.use('/restaurants', getRouterRestaurants(db) )
		app.use('/restaurant', getRouterRestaurant(db) )

		app.get('/boroughs', (req,res) => {
			db.collection('restaurants').distinct("borough")
						.then( boroughs => res.json(boroughs) )
						.catch( err => new Error(err) )
		})

		app.get('/cuisines', (req,res) => {
			db.collection('restaurants').distinct("cuisine")
						.then( cuisines => res.json(cuisines) )
						.catch( err => new Error(err) )
		})

		/*
		 * Respond to GET requests to /sign-s3.
		 * Upon request, return JSON containing the temporarily-signed S3 request and
		 * the anticipated URL of the image.
		 */
		app.get('/sign-s3', (req, res) => {

		  const s3 = new aws.S3();
		  const fileName = req.query['name'];
		  const fileType = req.query['type'];
		  const s3Params = {
		    Bucket: S3_BUCKET,
		    Key: fileName,
		    Expires: 60,
		    ContentType: fileType,
		    ACL: 'public-read'
		  };

		  s3.getSignedUrl('putObject', s3Params, (err, data) => {

		    if(err){
		      console.log(err);
		      return res.end();
		    }

		    const returnData = {
		      signedRequest: data,
		      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
		    };
		    res.write(JSON.stringify(returnData));
		    res.end();
		  });

		});

	})
	.catch( (err) => new Error('Something failed in the connection') )

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))