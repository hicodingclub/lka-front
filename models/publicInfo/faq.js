var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var faqSchema = new Schema(
  {
    question: {type: String, required: true},
    answer: {type: String, required: true, maxlength: 1000},
    order: {type: Number, required: true},
    enable: {type: Boolean, required: true, default: false}
  }
);

var Brief = "question answer order enable";
var Detail = "question | answer | order | enable";
var Creat = "question answer order enable";
var Edit = "question answer order enable";
var TextSearch = "question";
var Index = "question";

var views = [Brief, Detail, Creat, Edit, TextSearch, Index]


//Export model
module.exports = {schema: faqSchema, views: views, name: 'FAQ'};
