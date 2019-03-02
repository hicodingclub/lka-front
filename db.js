const mongoose = require('mongoose');
const mongoDB = 'mongodb://lkauser:lkauser1@ds143683.mlab.com:43683/lka';
mongoose.connect(mongoDB, { useNewUrlParser: true }, function(error, db) {
  if (error) throw error;
} );
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
