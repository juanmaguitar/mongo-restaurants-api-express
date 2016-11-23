const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser');

const Restaurant = require('./models/restaurant')

const urlDB = 'mongodb://localhost:27017/test';
const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

const app = express();


app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )


const db = mongoose.connection;
db.once('open', () => console.log("Connected to DB...") );

mongoose.connect( urlDB );

app.get('/restaurants', (req,res) => {

	Restaurant.find().sort({ _id: -1 }).limit(5).exec( (err, restaurants) => {
	  if (err) return console.error(err);
	  res.json(restaurants);
	})

})

// curl --data "name=demoRestaurant&borough=Bronx&cuisine=Hamburguers" http://localhost:3000/restaurants

app.post('/restaurants', (req,res) => {

	const { name, borough, cuisine } = req.body;
	let restaurantData = {
		  "address": {
		    "building": "1007",
		    "coord": [ -73.856077, 40.848447 ],
		    "street": "Morris Park Ave",
		    "zipcode": "10462"
		  },
//		  "borough": "Bronx",
//		  "cuisine": "Bakery",
		  "grades": [],
//		  "name": "Morris Park Bake Shop",
		  "restaurant_id": "30075445"
	}

	restaurantData.name = name;
	restaurantData.borough = borough;
	restaurantData.cuisine = cuisine;

	const restaurant = new Restaurant(restaurantData)

	restaurant.save()
		.then( restaurant => {
			console.log("saved succesfully");
		  res.json(restaurant);
		})
		.catch( console.log )

})

app.listen(PORT, () => console.log (`Listening on port ${PORT}`) )

