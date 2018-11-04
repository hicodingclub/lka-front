var mongoose = require('mongoose');

let eventDef = require('./event');
let teacherDef = require('./teacher');

var schemas = {
  "event": eventDef,
  "teacher": teacherDef,
};

var config = {
	dateFormat: "MM-DD-YYYY",
}

module.exports = {schemas: schemas, config: config};

