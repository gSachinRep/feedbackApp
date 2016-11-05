var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var grades = new Schema({
    emp:Array,
    empId: String,
    pq1:String,
    pa1:String,
    pq2:String,
    pa2:String,
    pq3:String,
    pa3:String,
    pq4:String,
    pa4:String,
    eq1:String,
    ea1:String,
    eq2:String,
    ea2:String,
    eq3:String,
    ea3:String,
    eq4:String,
    ea4:String,
    eq5:String,
    ea5:String,
    oq1:String,
    oa1:String,
    fq1:String,
    fa1:String,
    fq2:String,
    fa2:String
  });

module.exports = mongoose.model('Grades',grades);
