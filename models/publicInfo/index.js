var mongoose = require('mongoose');


let generalInfoDef = require('./generalInfo');
let faqDef = require('./faq');
var schemas = {
  "GeneralInfo": generalInfoDef,
  "faqInfo": faqDef,
};

var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

const authz = {
  "module-authz": {"LoginUser": '', "Anyone": "R"}
}

module.exports = {schemas: schemas, config: config, authz: authz};