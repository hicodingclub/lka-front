var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    email: {type: String, required: true, max: 100},
    grade: {type: Number, required: true},
  }
);

// Virtual for Student's full name
studentSchema
.virtual('name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});

var studentBrief = "first_name last_name email";
var studentDetail = "first_name last_name | date_of_birth grade | email";
var studentCreat = "first_name last_name date_of_birth email grade";
var studentEdit = "first_name last_name date_of_birth email grade";
var studentTextSearch = "first_name last_name date_of_birth email grade";
var studentIndex = "email";

var views = [studentBrief, studentDetail, studentCreat, studentEdit, studentTextSearch, studentIndex]

//Export model
//module.exports = mongoose.model('Student', StudentSchema);


module.exports = {schema: studentSchema, views: views};


