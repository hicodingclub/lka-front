var mongoose = require('mongoose');

let generalInfoDef = require('./generalInfo');
var schemas = {
  "GeneralInfo": generalInfoDef,
};

var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

const authz = {
  "module-authz": {"LoginUser": '', "Anyone": "R"}
}

module.exports = {schemas: schemas, config: config, authz: authz};