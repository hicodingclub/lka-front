var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    last_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    email: {type: String, required: true, maxlength: 100},
    phoneNumber: {type: String, required: true, maxlength: 20},
    school: {type: String, required: true, maxlength: 100},
    grade: {type: Number, required: true},
    GuardianOneName: {type: String, required: false, maxlength: 100},
    GuardianOnePhone: {type: String, required: false, maxlength: 20},
    GuardianOneEmail: {type: String, required: false, maxlength: 100},

    GuardianTwoName: {type: String, required: false, maxlength: 100},
    GuardianTwoPhone: {type: String, required: false, maxlength: 20},
    GuardianTwoEmail: {type: String, required: false, maxlength: 100},
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
