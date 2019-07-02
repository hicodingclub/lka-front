var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    last_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    email: {type: String, required: true, maxlength: 100},
    grade: {type: Number, required: true},
  },
  {
    timestamps: true
  }
);

// Virtual for Student's full name
schema.virtual('name').get(function () {
  if (this.first_name && this.last_name) {
      return this.first_name + ' ' + this.last_name;
  }
  let fullName = this.first_name || this.last_name;
  if (!fullName) fullName = "Unknown"
  return fullName;
});

module.exports = schema;
