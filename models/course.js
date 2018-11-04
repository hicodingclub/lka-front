var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courseSchema = new Schema(
  {
    title: {type: String, required: true, max: 100},
	description: {type: String, required: true, max: 100},
	time: {type: Date, required: true},
	length: {type: Date},
  }
);
var courseBrief = "title time publishDate";
var courseDetail = "title time publishDate description length";
var courseCreat = "title time description length";
var courseEdit = "title time description length";
var courseTextSearch = "title time description length" 
var courseIndex = "title";

var views = [courseBrief, courseDetail, courseCreat, courseEdit, courseTextSearch, courseIndex]


//Export model
//module.exports.model = mongoose.model('Event', StudentSchema);

module.exports = {schema: courseSchema, views: views};


// Virtual for Student's full name
courseSchema
.virtual('name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});