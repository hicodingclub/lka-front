var mongoose = require('mongoose');

let eventDef = require('./event');
let studentDef = require('./student');
let teacherDef = require('./teacher');
let courseDef = require('./course');
let courseInstanceDef = require('./courseInstance');

var schemas = {
  "Event": eventDef,
  "Student": studentDef,
  "Teacher": teacherDef,
  "Course": courseDef,
  "CourseInstance": courseInstanceDef
};

var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

module.exports = {schemas: schemas, config: config};

