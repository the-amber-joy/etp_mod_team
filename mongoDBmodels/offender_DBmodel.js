const mongoose = require('mongoose');
const Notes = require('./note_DBmodel');
const Admin = require('./admin_DBmodel');

const Schema = mongoose.Schema;

const Offender = new Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    changesMade: { type: Boolean, default: false },
    name: String,
    nickName: String,
    otherNames: [{ altName: String }],
    points: Number,
    originalPoints: { type: Number, default: this.points },
    isBanned: { type: Boolean, default: false },
    originalStatus: { type: Boolean, default: this.isBanned },
    addedBy: Admin.schema,
    notes: [ Notes.schema ],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Offender', Offender);

// Structure of New Offender Object to Post
// {
//     "name" : "New Offender",
//         "nickName" : "Newbie",
//         "otherNames" : [{ "altName" : "New Guy" }, { "altName" : "The New Guy" }],
//         "points" : 5,
//         "isBanned" : false,
//         "addedBy" : {
//             "firstName" : "Fake",
//             "lastName" : "Tester",
//             "nickName" : "Admin"
//     },
//     "notes" : [
//         {
//             "note": "New note about this guy",
//             "created": $currentDate,
//             "addedBy" : {
//                 "firstName" : "Fake",
//                 "lastName" : "Tester",
//                 "nickName" : "Admin"
//             }
//         },
//         {
//             "note" : "New note about this guy",
//             "created" : new Date(),
//             "addedBy" : {
//                 "firstName" : "Fake",
//                 "lastName" : "Tester",
//                 "nickName" : "Admin"
//             }
//         },
//         {
//             "note" : "New note about this guy",
//             "created" : new Date(),
//             "addedBy" : {
//                 "firstName" : "Fake",
//                 "lastName" : "Tester",
//                 "nickName" : "Admin"
//             }
//         }
//     ],
//         "created" : new Date(),
//         "updated" : new Date()
// }
