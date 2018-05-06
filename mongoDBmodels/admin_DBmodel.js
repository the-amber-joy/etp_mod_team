var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Admin = new Schema({
  firstName: String,
  lastName: String,
  displayName: String,
  username: String,
  hash: String
});

module.exports = mongoose.model('Admin', Admin);
