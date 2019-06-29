var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var generalInfoSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, maxlength: 1000},
    signaturePicture: {type: String,  required: false,
      mraType: 'picture', mraSharable: true},
    tag: {type: String, required: false, maxlength: 50},
  }
);

var Brief = "signaturePicture title description tag";
var Detail = "signaturePicture | title | description "; // sequence is critical for mraUI type 'info'
var Creat = "title description signaturePicture tag";
var Edit = "title description signaturePicture tag";
var TextSearch = "title";
var Index = "title";

var views = [Brief, Detail, Creat, Edit, TextSearch, Index]


//Export model
module.exports = {
  schema: generalInfoSchema,
  views: views, 
  name: 'General Information',
  mraUI: {
    detailType: 'info', //use the info view in detailed page
    listType: 'list', // list, table, or grid
    defaultListSort: {'title': 'asc'},
    publicListFilter: {},
    homeListNumber: 3,
  },
};
