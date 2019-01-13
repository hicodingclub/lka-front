var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courseSchema = new Schema(
  {
    title: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100},
  }
);
var courseBrief = "title description";
var courseDetail = "title description";
var courseCreat = "title description";
var courseEdit = "title description";
var courseTextSearch = "title description";
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