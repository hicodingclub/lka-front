var mongoose = require('mongoose');

let eventDef = require('./event');
let generalInfoDef = require('./generalInfo');
var schemas = {
  "GeneralInfo": generalInfoDef,
  "Event": eventDef,
};

var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

const authz = {
  "module-authz": {"LoginUser": '', "Anyone": "R"}
}

module.exports = {schemas: schemas, config: config, authz: authz};