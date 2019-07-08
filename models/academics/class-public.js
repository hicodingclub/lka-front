const schema = require('./class');

var brief = "title course startTime endTime dayOfWeek";
var detail = "title | description | course price  | teacher | startTime endTime | dayOfWeek";
var creat = "title course description teacher price startTime endTime dayOfWeek hot";
var edit = "title course description teacher price startTime endTime dayOfWeek hot";
var textSearch = "title teacher course";
var index = "title";

var views = [brief, detail, creat, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  api: 'LR',
  extraViews: 'HS', //home - home page list view, s: select view for pipeline/composite
  mraUI: {
    listType: 'table', // table, list, or grid
    listItemPipelines: [],
    detailPipelines: [["Enroll", "/pipeline/register-class"]],
    detailRefBlackList: ['StudentClass'], // not show these reference sub list in detail view

    selectExtraType: 'dropdown', // select extraView type: dropdown, card, table, list
  },
};
