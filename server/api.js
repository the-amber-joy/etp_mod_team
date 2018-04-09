const express = require('express');
const api = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/etp_mod_team');
const Offender = require('../mongoDBmodels/offender_DBmodel');
const Note = require('../mongoDBmodels/note_DBmodel');

// POST NEW
api.route('/offender')
    .post((req, res, err) => {
    console.log("posting new offender", req.body.name);
    Offender.create(req.body, err => {
        if (err)
            res.send(err);

        res.json({
            message: { "New offender created:": req.body.name }
        })
    })
})

// GET ALL
api.route('/offenders').get((req, res) => {
    Offender.find((err, offenders) => {
        if (err)
            res.send(err);
        res.send(offenders);
    });
});

// GET ONE BY NAME (allows partial string search, case-insensitive)
api.route('/offender/').get((req, res) => {
    Offender.find({ "name": { $regex: req.headers.name, $options: 'i' } }, (err, offender) => {
        if (err)
            res.send(err);
        res.json(offender);
    });
});

// UPDATE ONE NAME by ID
api.route('/updateOffender/:id').put((req, res) => {
    Offender.findByIdAndUpdate(req.params.id, { $set: { "name": req.body.newName } }, err => {
        if (err)
            res.send(err);
        res.send(
            "Offender name set to " + req.body.newName
        );
    });
});

// POST NEW NOTE to existing Offender by ID
api.route('/addNote/:id').post((req, res) => {
    Offender.findByIdAndUpdate(req.params.id, { $push: { "notes": req.body.note } }, err => {
        if (err)
            res.send(err);
        res.send(
            "New note added"
        );
        })
});


// // DELETE ONE by name
// api.route('/deleteOffender/:name').delete((req, res) => {
//     Offender.deleteOne({ "name": req.params.name }, err => {
//         if (err)
//             res.send(err);
//         res.send("Deleted " + req.params.name)
//     });
// });

module.exports = api;