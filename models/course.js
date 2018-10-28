var mongoose = require('mongoose');

var Schema = course.Schema;

var CourseSchema = new Schema(
  {
    Course_title: {type: String, required: true, max: 100},
	Course_description: {type: String, required: true, max: 100},
	Course_time: {type: float, required: true, max: 100},
	Course_length: {type: Date},
  }
);

//Export model
module.exports = course.model('Course', CourseSchema);