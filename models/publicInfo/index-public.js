let eventDef = require('./event-public');
let generalInfoDef = require('./generalInfo-public');
let keyNoteDef = require('./keynote-public');
let faqDef = require('./faq-public');
const schemas = {
  "GeneralInfo": generalInfoDef,
  "Faq": faqDef,
  "Event": eventDef,
  "KeyNote": keyNoteDef,
};

const config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

const authz = {
  "module-authz": {"LoginUser": 'R', "Anyone": 'R'}
}

module.exports = {schemas, config, authz};