var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var OffenderSchema = new Schema ({
    name: String,
    nickName: String,
    otherNames: [{ altName: String }],
    points: Number,
    isBanned: { type: Boolean, default: false },
    addedBy: { type: Schema.ObjectId, ref: 'Admin' },
    notes: [{ type: Schema.ObjectId, ref: 'Note'}],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Offender', OffenderSchema);