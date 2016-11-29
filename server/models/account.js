const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    email: String,
    image: String
});

Account.plugin( passportLocalMongoose );

module.exports = mongoose.model('Account', Account);