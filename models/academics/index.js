let studentDef = require('./student-admin');
let teacherDef = require('./teacher-admin');
let courseDef = require('./course-admin');
let courseInstanceDef = require('./class-admin');
let studentClassSchemaDef = require('./student_class-admin')
let classEnrollDef = require('./classenroll-admin')

const schemas = {
  Student: studentDef,
  Teacher: teacherDef,
  Course: courseDef,
  Class: courseInstanceDef,
  StudentClass: studentClassSchemaDef,
  ClassEnroll: classEnrollDef,
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
}

module.exports = {schemas, config, authz};
