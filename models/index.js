var mongoose = require('mongoose');

let eventDef = require('./event');
let studentDef = require('./student');
let teacherDef = require('./teacher');

var schemas = {
  "event": eventDef,
  "student": studentDef,
  "teacher": teacherDef,
};



var config = {
	dateFormat: "MM-DD-YYYY",
}

module.exports = {schemas: schemas, config: config};

