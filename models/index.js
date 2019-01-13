var mongoose = require('mongoose');

let eventDef = require('./event');
let studentDef = require('./student');
let teacherDef = require('./teacher');
let courseDef = require('./course');
let courseInstanceDef = require('./courseInstance');
let studentCourseInstanceAssociationSchemaDef = require('./student_courseinstance_association')

var schemas = {
  "Event": eventDef,
  "Student": studentDef,
  "Teacher": teacherDef,
  "Course": courseDef,
  "CourseInstance": courseInstanceDef,
  "StudentCourseInstance": studentCourseInstanceAssociationSchemaDef
};

var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

module.exports = {schemas: schemas, config: config};

