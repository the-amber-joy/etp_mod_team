const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
    firstName: String,
    lastName: String,
    displayName: String,
    username: String,
    hash: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admin', Admin);
