var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    email: {type: String, required: true, max: 100},
    grade: {type: Number, required: true},
  }
);

// Virtual for Student's full name
StudentSchema
.virtual('name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});


//Export model
module.exports = mongoose.model('Student', StudentSchema);