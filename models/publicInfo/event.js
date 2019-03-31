var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = new Schema(
  {
    title: {type: String, required: true, maxlength: 100},
    author: {type: String, required: true, maxlength: 50},
    publishDate: { type: Date, default: Date.now },
    content: { type: String, editor: true, required: true },
  }
);


var eventBrief = "title author publishDate";
var eventDetail = "title author publishDate content";
var eventCreat = "title author content";
var eventEdit = "title author content";
var eventTextSearch = "title author content" 
var eventIndex = "title";

var views = [eventBrief, eventDetail, eventCreat, eventEdit, eventTextSearch, eventIndex]


//Export model
//module.exports.model = mongoose.model('Event', StudentSchema);

module.exports = {schema: eventSchema, views: views,};