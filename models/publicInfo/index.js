var mongoose = require('mongoose');


let eventDef = require('./event');
let generalInfoDef = require('./generalInfo');
let faqDef = require('./faq');
var schemas = {
  "GeneralInfo": generalInfoDef,
  "Faq": faqDef,
  "Event": eventDef,
};

var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

const authz = {
  "module-authz": {"LoginUser": '', "Anyone": "R"}
}

module.exports = {schemas, config, authz};