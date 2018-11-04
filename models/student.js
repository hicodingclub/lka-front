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

var studentBrief = "first_name last_name";
var studentDetail = "first_name last_name date_of_birth email grade";
var studentCreat = "first_name last_name grade";
var studentEdit = "first_name last_name grade";
var studentTextSearch = "first_name last_name grade";
var studentIndex = "name";

var views = [studentBrief, studentDetail, studentCreat, studentEdit, studentTextSearch, studentIndex]

//Export model
//module.exports = mongoose.model('Student', StudentSchema);


module.exports = {schema: studentSchema, views: views};


