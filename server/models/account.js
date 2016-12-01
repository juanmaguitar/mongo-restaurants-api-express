const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    fullname: String,
    email: String,
    image: String,
    social: {
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String
    },
    roles: [String]
});

Account.plugin( passportLocalMongoose );

module.exports = mongoose.model('Account', Account);