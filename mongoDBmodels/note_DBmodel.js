const mongoose = require('mongoose');
const Admin = require('./admin_DBmodel');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    note: String,
    created: { type: Date, default: Date.now },
    createdBy: { type: Admin.schema, ref: 'Admins' }
});

module.exports = mongoose.model('Note', NoteSchema);