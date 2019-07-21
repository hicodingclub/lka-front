const schema = require('./class');

var brief = "title course teacher startTime endTime dayOfWeek hot";
var detail = "title | description | course price  | teacher | startTime endTime | duration | dayOfWeek timeSlot | notes | hot";
var creat = "title course description teacher price startTime endTime duration dayOfWeek timeSlot notes hot";
var edit = "title course description teacher price startTime endTime duration dayOfWeek timeSlot notes hot";
var textSearch = "title teacher course";
var index = "title";

var views = [brief, detail, creat, edit, textSearch, index];


//Export model
module.exports = {
  schema,
  views,
  mraUI: {
    listType: 'table', // table, list, or grid
    detailRefName: {
      'StudentClass': 'Class Students',
      "ClassEnroll": "Class Enrollments"
    }
  },
};
