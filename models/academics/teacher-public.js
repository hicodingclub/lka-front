const schema = require('./teacher');

const brief = "firstName lastName courses introduction photo";
const detail = "firstName lastName | email | phoneNumber  courses | introduction | photo";
const create = "firstName lastName courses introduction email phoneNumber photo";
const edit = "firstName lastName courses introduction email phoneNumber photo";
const textSearch = "firstName lastName courses email phoneNumber";
const index = "firstName lastName";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  api: "LR",
  mraUI: {
    listType: 'grid', // table, list, or grid
    listTitle: 'Our Staff',
  },
};
