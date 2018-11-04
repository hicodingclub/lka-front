var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teacherSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    introduction: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String}
  }
);

var teacherBrief = "firstName lastName";
var teacherDetail = "firstName lastName introduction email phoneNumber";
var teacherCreat = "firstName lastName introduction email phoneNumber";
var teacherEdit = "firstName lastName introduction email phoneNumber";
var teacherTextSearch = "firstName lastName email phoneNumber" 
var teacherIndex = "email";

var views = [teacherBrief, teacherDetail, teacherCreat, teacherEdit, teacherTextSearch, teacherIndex]

module.exports = {schema: teacherSchema, views: views};