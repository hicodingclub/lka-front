var mongoose = require('mongoose');

let eventDef = require('./event');
let teacherDef = require('./teacher');
let courseDef = require('./course');

var schemas = {
  "event": eventDef,
  "teacher": teacherDef,
  "course": courseDef,

};

var config = {
	dateFormat: "MM-DD-YYYY",
}

module.exports = {schemas: schemas, config: config};

