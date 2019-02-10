var mongoose = require('mongoose');

let eventDef = require('./event');
let studentDef = require('./student');
let teacherDef = require('./teacher');
let courseDef = require('./course');
let courseInstanceDef = require('./class');
let studentClassSchemaDef = require('./student_class')

var schemas = {
  "Event": eventDef,
  "Student": studentDef,
  "Teacher": teacherDef,
  "Course": courseDef,
  "Class": courseInstanceDef,
  "StudentClass": studentClassSchemaDef
};

var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

const authz = {
  "module-authz": {"LoginUser": 'CRUD', "Anyone": ""},
  "Event": {"Anyone": "R"},
  "Class": {"Anyone": "R"},
}

module.exports = {schemas: schemas, config: config, authz: authz};
