var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courseInstanceSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    dayOfWeek: {type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true},
    teacher: {type: Schema.Types.ObjectId, ref: 'Teacher', required: true},
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, 
  }
);

var courseInstanceBrief = "title teacher";
var courseInstanceDetail = "title description price startTime endTime dayOfWeek teacher course";
var courseInstanceCreat = "title description price startTime endTime dayOfWeek teacher course";
var courseInstanceEdit = "title description price startTime endTime dayOfWeek teacher course";
var courseInstanceTextSearch = "title teacher course";
var courseInstanceIndex = "title";

var views = [courseInstanceBrief, courseInstanceDetail, courseInstanceCreat, courseInstanceEdit, courseInstanceTextSearch, courseInstanceIndex]


//Export model
module.exports = {schema: courseInstanceSchema, views: views};
