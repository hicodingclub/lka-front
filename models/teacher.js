var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeacherSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    introduction: {type: String, required: true},
    email: {type: String, required: true}
    phoneNumber: {type String}
  }
);

//Export model
module.exports = mongoose.model('teacher', TeacherSchema);