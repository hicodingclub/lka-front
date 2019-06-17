var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = new Schema(
  {
    title: {type: String, required: true, maxlength: 100},
    author: {type: String, required: true, maxlength: 50},
    publishDate: { type: Date, default: Date.now },
    content: { type: String, editor: true, required: true },
    signaturePicture: {type: String,  required: true,
      mraType: 'picture', mraSharable: true},
  }
);


var eventBrief = "signaturePicture title author publishDate";
var eventDetail = "signaturePicture title author publishDate content"; //sequence is critical for mraUI detailType 'post'
var eventCreat = "title author content signaturePicture";
var eventEdit = "title author content signaturePicture";
var eventTextSearch = "title author content" 
var eventIndex = "title";

var views = [eventBrief, eventDetail, eventCreat, eventEdit, eventTextSearch, eventIndex]


//Export model
//module.exports.model = mongoose.model('Event', StudentSchema);

module.exports = {
  schema: eventSchema,
  views: views,
  mraUI: {
    detailType: 'post', //use the post view in detailed page
    listType: 'list', // list, table, or grid
  },
};