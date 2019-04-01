var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var generalInfoSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, maxlength: 1000},
    order: {type: Number, required: true},
    enable: {type: Boolean, required: true, default: false}
  }
);

var Brief = "title description order enable";
var Detail = "title | description | order | enable";
var Creat = "title description order enable";
var Edit = "title description order enable";
var TextSearch = "title";
var Index = "title";

var views = [Brief, Detail, Creat, Edit, TextSearch, Index]


//Export model
module.exports = {schema: generalInfoSchema, views: views, name: 'General Information'};
