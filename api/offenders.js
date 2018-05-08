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
                console.log(err)
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
api.route('/update').put((req, res) => {
    Offender.update({ _id: req.body._id }, {
        $push: {
            "notes": {
                $each: req.body.notes
            }
        },
        $set:
            {
                "isBanned": req.body.isBanned,
                "originalStatus": req.body.isBanned,
                "points": req.body.points,
                "originalPoints": req.body.points,
                "updated": req.body.updated,
                "updatedBy": req.body.updatedBy,
                "bannedBy": req.body.bannedBy,
                "dateBanned": req.body.dateBanned
            }
    }, { new: true }, (err, doc, res) => {
        if (err) {
            console.log(err)
        }
        return doc;
    })
});

// GET ONE BY NAME (allows partial string search, case-insensitive)
// api.route('/offender').get((req, res) => {
//     Offender.find({ "name": { $regex: req.headers.name, $options: 'i' } }, (err, offender) => {
//         if (err)
//             res.send(err);
//         res.json(offender);
//     });
// });

// UPDATE NAME by ID
// api.route('/updateOffender/:_id').put((req, res) => {
//     Offender.findByIdAndUpdate(req.params, { $set: { "name": req.body.newName } }, err => {
//         if (err)
//             res.send(err);
//         res.send(
//             "Offender name set to " + req.body.newName
//         );
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