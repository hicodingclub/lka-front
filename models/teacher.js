var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeacherSchema = new Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    introduction: {type: String, required: true},
    email: {type: String, required: true}
    phone_number: {type String}
  }
);

//Export model
module.exports = mongoose.model('Teacher', TeacherSchema);