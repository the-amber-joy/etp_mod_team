var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Admin = new Schema({
  firstName: String,
  lastName: String,
  nickName: String
});

module.exports = mongoose.model('Admin', Admin);
