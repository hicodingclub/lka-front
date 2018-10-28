var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courseInstanceTeacherAssociationSchema = new Schema(
  {
    courseInstance: {type: Schema.Types.ObjectId, ref: 'courseInstance', required: true},
    teacher: {type: Schema.Types.ObjectId, ref: 'teacher', required: true}
  }
);

//Export model
module.exports = mongoose.model('courseInstanceTeacherAssotiation', C_T_ASchema);