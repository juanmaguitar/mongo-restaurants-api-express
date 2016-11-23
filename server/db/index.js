const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dbURI = process.env.DB_URI;
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
db.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// When the connection to DB is done
db.on('connected', () => console.log(`Mongoose default connection open to ${dbURI}`));

module.exports = db;