var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, maxlength: 100},
    price: {type: String, required: true},
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    dayOfWeek: {type: [String], enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
                 default: ['Mon'],  elementunique: true, required: true},
    teacher: {type: Schema.Types.ObjectId, ref: 'Teacher', required: true},
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    hot: {type: Boolean, default: false}
  }
);

module.exports = schema;