const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const getRouterRestaurants = require('./routes/restaurants');
const getRouterRestaurant = require('./routes/restaurant');

const prepareParams = require('./routes/middleware/prepareParams');

const PORT = 3000;

const app = express();

app.use( express.static('public') )
app.use( prepareParams )

// Connection URL
const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url)
	.then( (db) => {

		console.log("Connected to DB...")

		app.use('/restaurants', getRouterRestaurants(db) )
		app.use('/restaurant', getRouterRestaurant(db) )

		app.get('/boroughs', (req,res) => {
			db.collection('restaurants').distinct("borough")
						.then( boroughs => res.json(boroughs) )
						.catch( err => new Error(err) )
		})

	})
	.catch( (err) => new Error('Something failed in the connection') )

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))