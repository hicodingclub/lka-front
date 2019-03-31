var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentClassSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, //reference to the associated student
    class: { type: Schema.Types.ObjectId, ref: 'Class', required: true }, //reference to the associated course instance
  }
);

//to make the association unique
studentClassSchema.index({ student: 1, class: 1}, {unique: true}); // schema level

var studentClassBrief = "student class";
var studentClassDetail = "student class";
var studentClassCreat = "student class";
var studentClassEdit = "student class";
var studentClassTextSearch = "student class";
var studentClassIndex = "student"; //let's temporarily put any field here since this schema is not referred. 

var views = [studentClassBrief, studentClassDetail, studentClassCreat, 
             studentClassEdit, studentClassTextSearch, studentClassIndex]

//Export model
module.exports = {
    schema: studentClassSchema, 
    views: views,
    embeddedViewOnly: true  //only viewable from sub-view
};