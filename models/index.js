var mongoose = require('mongoose');

let eventDef = require('./event');
let studentDef = require('./student');
let teacherDef = require('./teacher');
let courseDef = require('./course');

var schemas = {
  "event": eventDef,
  "student": studentDef,
  "teacher": teacherDef,
  "course": courseDef,

};



var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

module.exports = {schemas: schemas, config: config};

