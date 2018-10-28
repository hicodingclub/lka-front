var mongoose = require('mongoose');

let eventDef = require('./event');

var schemas = {
  "event": eventDef,
};

var config = {
	dateFormat: "MM-DD-YYYY",
}

module.exports = {schemas: schemas, config: config};

