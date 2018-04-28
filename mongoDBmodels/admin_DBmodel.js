var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Admin = new Schema({
  firstName: String,
  lastName: String,
  nickName: String,
  email: String,
  username: String,
  hash: String
});

module.exports = mongoose.model('Admin', Admin);
