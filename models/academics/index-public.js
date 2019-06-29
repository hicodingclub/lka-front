let studentDef = require('./student');
let teacherDef = require('./teacher');
let courseDef = require('./course');
let courseInstanceDef = require('./class-public');
let studentClassSchemaDef = require('./student_class')

const schemas = {
  Student: studentDef,
  Teacher: teacherDef,
  Course: courseDef,
  Class: courseInstanceDef,
  StudentClass: studentClassSchemaDef
};

const config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss",
  fileServer: {
    uploadUrl: '/api/files/upload',
    downloadUrl: '/api/files/download'
  }
}

const authz = {
  "module-authz": {"LoginUser": 'R', "Anyone": ""},
  "Class": {"LoginUser": '', "Anyone": "R"},
}

module.exports = {schemas, config, authz};
