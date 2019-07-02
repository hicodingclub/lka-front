var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, //reference to the associated student
    class: { type: Schema.Types.ObjectId, ref: 'Class', required: true }, //reference to the associated course instance
  }
);

//to make the association unique
schema.index({ student: 1, class: 1}, {unique: true}); // schema level

//Export model
module.exports = schema;