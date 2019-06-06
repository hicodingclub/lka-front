var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teacherSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    courses: {type: Schema.Types.ObjectId, ref: 'Course', required: true},
    introduction: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String},
    // mraType: a link to a picture; mraPresent: present the picture; mraSharable: if the picture is sharable with other items
    photo: {type: String,  required: true,
      mraType: 'picture', mraSharable: false},
  }
);

teacherSchema.virtual('name').get(function () {
  if (this.firstName && this.lastName) {
      return this.firstName + ' ' + this.lastName;
  }
  let fullName = this.firstName || this.lastName;
  if (!fullName) fullName = "Unknown"
  return fullName;
});

var teacherBrief = "firstName lastName courses introduction, photo";
var teacherDetail = "firstName lastName | email | phoneNumber  courses | introduction | photo";
var teacherCreat = "firstName lastName courses introduction email phoneNumber photo";
var teacherEdit = "firstName lastName courses introduction email phoneNumber photo";
var teacherTextSearch = "firstName lastName courses email phoneNumber";
var teacherIndex = "name";

var views = [teacherBrief, teacherDetail, teacherCreat, teacherEdit, teacherTextSearch, teacherIndex]

module.exports = {schema: teacherSchema, views: views};
