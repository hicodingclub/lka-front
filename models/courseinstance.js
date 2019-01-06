var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courseInstanceSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    time: {type: Date, required: true},
    teacher: {type: Schema.Types.ObjectId, ref: 'Teacher', required: true},
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, 
  }
);

var courseInstanceBrief = "title time teacher";
var courseInstanceDetail = "title description price time teacher course";
var courseInstanceCreat = "title description price time teacher course";
var courseInstanceEdit = "title description price time teacher course";
var courseInstanceTextSearch = "title time teacher course" 
var courseInstanceIndex = "title";

var views = [courseInstanceBrief, courseInstanceDetail, courseInstanceCreat, courseInstanceEdit, courseInstanceTextSearch, courseInstanceIndex]


//Export model
module.exports = {schema: courseInstanceSchema, views: views};
