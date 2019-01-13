var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentCourseInstanceAssociationSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, //reference to the associated student
    courseInstance: { type: Schema.Types.ObjectId, ref: 'CourseInstance', required: true }, //reference to the associated course instance
  }
);

var courseInstanceBrief = "student courseInstance";
var courseInstanceDetail = "student courseInstance";
var courseInstanceCreat = "student courseInstance";
var courseInstanceEdit = "student courseInstance";
var courseInstanceTextSearch = "student courseInstance";
var courseInstanceIndex = "student";

var views = [courseInstanceBrief, courseInstanceDetail, courseInstanceCreat, courseInstanceEdit, courseInstanceTextSearch, courseInstanceIndex]


//Export model
module.exports = {schema: studentCourseInstanceAssociationSchema, views: views};