var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoteSchema = new Schema({
    note: String,
    created: { type: Date, default: Date.now },
    addedBy: { type: Schema.ObjectId, ref: 'Admin' }
});

module.exports = mongoose.model('Note', NoteSchema);