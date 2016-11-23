const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const collection = 'restaurants'

var RestaurantSchema = new Schema({
		name: String,
    borough: String,
    cuisine: String,
    address: {
    	building : String,
	    street : String,
	    zipcode : String,
	    coord : [Number],
    },
		grades: [{
			date: Date,
			grade: String,
			score: Number
		}],
}, { collection });

RestaurantSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Restaurant', RestaurantSchema);