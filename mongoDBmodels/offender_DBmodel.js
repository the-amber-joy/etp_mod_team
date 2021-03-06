const mongoose = require('mongoose');
const Notes = require('./note_DBmodel');
const Admin = require('./admin_DBmodel');

const Schema = mongoose.Schema;

const Offender = new Schema({
    name: String,
    nickName: String,
    otherNames: [String],
    fbLink: String,
    points: Number,
    watchStatus: String,
    isBanned: { type: Boolean, default: false },
    notes: [Notes.schema],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    createdBy: { type: Admin.schema, ref: 'Admins' },
    updatedBy: { type: Admin.schema, ref: 'Admins' },
    bannedBy: { type: Admin.schema, ref: 'Admins' },
    dateBanned: { type: Date }
});

module.exports = mongoose.model('Offender', Offender);