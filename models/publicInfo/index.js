const mongoose = require('mongoose');

let eventDef = require('./event-admin');
let generalInfoDef = require('./generalInfo-admin');
let keyNoteDef = require('./keynote-admin');
let faqDef = require('./faq-admin');
let termsDef = require('./terms-admin');
let articleDef = require('./article-admin');
const schemas = {
  'GeneralInfo': generalInfoDef,
  'Faq': faqDef,
  'Event': eventDef,
  'KeyNote': keyNoteDef,
  'Terms': termsDef,
  "Article": articleDef,
};

const config = {
  dateFormat: 'MM-DD-YYYY',
  timeFormat: 'hh:mm:ss'
}

const authz = {
  'module-authz': {'LoginUser': 'R', 'Anyone': ''}
}

module.exports = {schemas, config, authz};