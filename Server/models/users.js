var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var users = new Schema({
    participantName: String,
    participantCode: String,
    orgName: String,
    progType:String
});

module.exports = mongoose.model('Users',users);
