var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AdminSchema = new Schema ({
  firstName: String,
    lastName: String,
    nickName: String
});

module.exports = mongoose.model('Admin', AdminSchema);
