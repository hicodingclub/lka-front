var mongoose = require('mongoose');

let studentDef = require('./student');
let teacherDef = require('./teacher');
let courseDef = require('./course');
let courseInstanceDef = require('./class');
let studentClassSchemaDef = require('./student_class')

var schemas = {
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
  "module-authz": {"LoginUser": 'R', "Anyone": ""},
  "Class": {"LoginUser": '', "Anyone": "R"},
}

module.exports = {schemas: schemas, config: config, authz: authz};
