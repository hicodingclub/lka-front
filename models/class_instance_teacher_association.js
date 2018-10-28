var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var C_T_ASchema = new Schema(
  {
    course_instance: {type: Schema.Types.ObjectId, ref: 'Courseinstance', required: true},
    teacher: {type: Schema.Types.ObjectId, ref: 'Teacher', required: true}
  }
);

//Export model
module.exports = mongoose.model('C_T_A', C_T_ASchema);