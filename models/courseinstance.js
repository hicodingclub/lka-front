var mongoose = require('mongoose');

var Schema = Course.Schema;

var CourseinstanceSchema = new Schema(
  {
    Courseinstance_title: {type: String, required: true},
    Courseinstance_description: {type: String, required: true, max: 100},
    Courseinstance_Room: {type: int, required: true, max: 100},
    Courseinstance_price: {type:float, required: true, max: 100},
    Courseinstance_time: {type: float, required: true, max: 100},
    Courseinstance_teacher: {type: String, required: true, max: 100},
    Courseinstance_price: {type:float, required: true, max: 100},
    Course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, 
    Teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true }, 
  }
);

//Export model
module.exports = course.model('Courseinstance', CourseinstanceSchema);