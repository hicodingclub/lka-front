const schema = require('./class');

var brief = "title course teacher startTime endTime dayOfWeek hot";
var detail = "title | description | course price  | teacher | startTime endTime | dayOfWeek | hot";
var creat = "title course description teacher price startTime endTime dayOfWeek hot";
var edit = "title course description teacher price startTime endTime dayOfWeek hot";
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
    }
  },
};
