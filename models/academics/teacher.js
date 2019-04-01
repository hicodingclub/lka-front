var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teacherSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    courses: {type: Schema.Types.ObjectId, ref: 'Course', required: true},
    introduction: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String}
  }
);

var teacherBrief = "firstName lastName courses introduction";
var teacherDetail = "firstName lastName | email | phoneNumber  courses | introduction ";
var teacherCreat = "firstName lastName courses introduction email phoneNumber";
var teacherEdit = "firstName lastName courses introduction email phoneNumber";
var teacherTextSearch = "firstName lastName courses email phoneNumber";
var teacherIndex = "lastName";

var views = [teacherBrief, teacherDetail, teacherCreat, teacherEdit, teacherTextSearch, teacherIndex]

module.exports = {schema: teacherSchema, views: views};

