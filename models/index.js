var mongoose = require('mongoose');

let eventDef = require('./event');
let studentDef = require('./student');

var schemas = {
  "event": eventDef,
  "student": studentDef,
};

var config = {
	dateFormat: "MM-DD-YYYY",
}

module.exports = {schemas: schemas, config: config};

