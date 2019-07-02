const schema = require('./student');

const brief = "first_name last_name email grade";
const detail = "first_name last_name | date_of_birth grade | email";
const create = "first_name last_name date_of_birth email grade";
const edit = "first_name last_name date_of_birth email grade";
const textSearch = "first_name last_name date_of_birth email grade";
const index = "first_name last_name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  api: 'LCRUD',
  patch: ['muser_id'], //extra fields to patch to schema
  owner: {enable: true, type: 'user'},

  mraUI: {
    listType: 'grid', // table, list, or grid
    disableListSearch: true, // not show the search bar
    detailActionButtons: ['Edit student profile', 'Copy and add another student', 'Remove this profile'],
    listActionButtons: ['Add another student', 'Remove selected profiles'],
    detailRefName: {
      'StudentClass': 'Attended Classes',
    }
  },
};
