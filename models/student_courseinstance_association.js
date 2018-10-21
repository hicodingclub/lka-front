var moment = require('moment');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentCourseInstanceAssociationSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, //reference to the associated student
    courseInstance: { type: Schema.Types.ObjectId, ref: 'Course_Instance', required: true }, //reference to the associated course instance
  }
);

// Virtual for StudentCourseInstanceAssociation's URL
StudentCourseInstanceAssociationSchema
.virtual('url')
.get(function () {
  return '/catalog/StudentCourseInstanceAssociation/' + this._id;
});

//Export model
module.exports = mongoose.model('StudentCourseInstanceAssociation', StudentCourseInstanceAssociationSchema);