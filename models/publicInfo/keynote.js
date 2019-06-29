var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var keyNoteSchema = new Schema(
  {
    title: {type: String, required: false},
    subtitle: {type: String, required: false},
    description: {type: String, required: false, maxlength: 1000},
    signaturePicture: {type: String,  required: false,
      mraType: 'picture', mraSharable: true},
    tag: {type: String, required: false, maxlength: 50},
  }
);

var Brief = "signaturePicture title subtitle description tag";
var Detail = "signaturePicture | title | subtitle | description "; // sequence is critical for mraUI type 'slidesubtitle'
var Creat = "title subtitle description signaturePicture tag";
var Edit = "title subtitle description signaturePicture tag";
var TextSearch = "title";
var Index = "title";

var views = [Brief, Detail, Creat, Edit, TextSearch, Index]


//Export model
module.exports = {
  schema: keyNoteSchema,
  views: views, 
  name: 'Key Notes',
  mraUI: {
    detailType: 'slide', //use the slide view in detailed page
    listType: 'list', // list, table, or grid
    defaultListSort: {'title': 'asc'},
    publicListFilter: {},
    homeListNumber: 3,
  },
};
