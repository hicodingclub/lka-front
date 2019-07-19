const schema = require('./course');

const brief = "title description";
const detail = "title description";
const create = "title description";
const edit = "title description";
const textSearch = "title description";
const index = "title";

const views = [brief, detail, create, edit, textSearch, index]


//Export model
//module.exports.model = mongoose.model('Event', StudentSchema);

module.exports = {
  schema,
  views,
  api: "LR",
  actionViews: 'H', //home - home page list view, s: select view for pipeline/composite
  mraUI: {
    listTitle: 'Class Categories',
  }
};