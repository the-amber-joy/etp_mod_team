const express = require('express');
const api = express();

const Offender = require('../mongoDBmodels/offender_DBmodel');
const Note = require('../mongoDBmodels/note_DBmodel');

// POST NEW
api.route('/offender')
    .post((req, res, err) => {
        Offender.create(req.body, (err, doc) => {
            if (err)
                res.send(err)
            res.send(doc)
        })
    })

// GET ALL
api.route('/offenders').get((req, res) => {

    Offender.find((err, offenders) => {
        if (err)
            res.send(err);
        res.json(offenders);
    });
});

// UPDATE existing Offender by ID
api.route('/update').put((req) => {
    function updateNotes(){
        if (req.body.notes && req.body.notes.length > 0) {
            Offender.update(
                { _id: req.body._id },
                { $push: { "notes": { $each: req.body.notes } } },
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }
    updateNotes();

    Offender.update({ _id: req.body._id }, {
        $set: {
            "fbLink": req.body.fbLink,
            "isBanned": req.body.isBanned,
            "originalStatus": req.body.isBanned,
            "points": req.body.points,
            "originalPoints": req.body.points,
            "updated": req.body.updated,
            "updatedBy": req.body.updatedBy,
            "bannedBy": req.body.bannedBy,
            "dateBanned": req.body.dateBanned
        }},
        { new: true }, // this option returns the MODIFIED document
        (err, doc, res) => {
            if (err) {
                console.log(err)
            }
            return doc;
    })
});

// EDIT existing Offender by ID
// api.route('/edit').put((req, res) => {
//     Offender.update({ _id: req.body._id }, {
//         $push: {
//             "otherNames": {
//                 $each: req.body.oldName
//             }
//         },
//         $set:
//         {
//             "name": req.body.newName,
//             "fbLink": req.body.fbLink,
//             "updated": req.body.updated,
//             "updatedBy": req.body.updatedBy,
//         }
//     }, { new: true }, (err, doc, res) => {
//         if (err) {
//             console.log(err)
//         }
//         return doc;
//     })
// });

// GET ONE BY NAME (allows partial string search, case-insensitive)
// api.route('/offender').get((req, res) => {
//     Offender.find({ "name": { $regex: req.headers.name, $options: 'i' } }, (err, offender) => {
//         if (err)
//             res.send(err);
//         res.json(offender);
//     });
// });

// // DELETE ONE by name
// api.route('/deleteOffender/:name').delete((req, res) => {
//     Offender.deleteOne({ "name": req.params.name }, err => {
//         if (err)
//             res.send(err);
//         res.send("Deleted " + req.params.name)
//     });
// });

module.exports = api;