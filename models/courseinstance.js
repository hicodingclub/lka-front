var mongoose = require('mongoose');

var Schema = Course.Schema;

var courseInstanceSchema = new Schema(
  {
    courseInstance_title: {type: String, required: true},
    courseInstance_description: {type: String, required: true, max: 100},
    courseInstance_Room: {type: int, required: true, max: 100},
    courseInstance_price: {type:float, required: true, max: 100},
    courseInstance_time: {type: float, required: true, max: 100},
    courseInstance_teacher: {type: String, required: true, max: 100},
    courseInstance_price: {type:float, required: true, max: 100},
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, 
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true }, 
  }
);

//Export model
module.exports = mongoose.model('Courseinstance', courseInstanceSchema);


//Virtual for couseInstance's full name
couseInstanceSchema
.virtual('name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});