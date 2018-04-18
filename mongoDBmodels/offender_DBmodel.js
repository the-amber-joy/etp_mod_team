const mongoose = require('mongoose');
const Notes = require('./note_DBmodel');
const Admin = require('./admin_DBmodel');

const Schema = mongoose.Schema;

const Offender = new Schema({
    name: String,
    // nickName: String,
    // otherNames: [{ altName: String }],
    points: Number,
    watchStatus: String,
    isBanned: { type: Boolean, default: false },
    addedBy: Admin.schema,
    notes: [ Notes.schema ],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Offender', Offender);