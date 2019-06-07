var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    last_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    email: {type: String, required: true, maxlength: 100},
    grade: {type: Number, required: true},
  }
);

// Virtual for Student's full name
studentSchema.virtual('name').get(function () {
  if (this.first_name && this.last_name) {
      return this.first_name + ' ' + this.last_name;
  }
  let fullName = this.first_name || this.last_name;
  if (!fullName) fullName = "Unknown"
  return fullName;
});

var studentBrief = "first_name last_name email grade";
var studentDetail = "first_name last_name | date_of_birth grade grade | email";
var studentCreat = "first_name last_name date_of_birth email grade";
var studentEdit = "first_name last_name date_of_birth email grade";
var studentTextSearch = "first_name last_name date_of_birth email grade";
var studentIndex = "first_name last_name";

var views = [studentBrief, studentDetail, studentCreat, studentEdit, studentTextSearch, studentIndex]

//Export model
//module.exports = mongoose.model('Student', StudentSchema);


module.exports = {schema: studentSchema, views: views};


