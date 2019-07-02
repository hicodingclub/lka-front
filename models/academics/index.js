let studentDef = require('./student-admin');
let teacherDef = require('./teacher-admin');
let courseDef = require('./course-admin');
let courseInstanceDef = require('./class-admin');
let studentClassSchemaDef = require('./student_class-admin')

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
