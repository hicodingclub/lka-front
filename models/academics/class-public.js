var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courseInstanceSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, maxlength: 100},
    price: {type: Number, required: true},
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    dayOfWeek: {type: [String], enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
                 default: ['Mon'],  elementunique: true, required: true},
    teacher: {type: Schema.Types.ObjectId, ref: 'Teacher', required: true},
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    hot: {type: Boolean, default: false}
  }
);

var courseInstanceBrief = "title course startTime endTime dayOfWeek";
var courseInstanceDetail = "title | description | course price  | teacher | startTime endTime | dayOfWeek";
var courseInstanceCreat = "title course description teacher price startTime endTime dayOfWeek hot";
var courseInstanceEdit = "title course description teacher price startTime endTime dayOfWeek hot";
var courseInstanceTextSearch = "title teacher course";
var courseInstanceIndex = "title";

var views = [courseInstanceBrief, courseInstanceDetail, courseInstanceCreat, courseInstanceEdit, courseInstanceTextSearch, courseInstanceIndex]


//Export model
module.exports = {
  schema: courseInstanceSchema,
  views: views,
  mraUI: {
    listType: 'table', // table, list, or grid
  },
};
