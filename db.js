const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/lka';
mongoose.connect(mongoDB, { useNewUrlParser: true }, function(error, db) {
  if (error) throw error;
} );
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
