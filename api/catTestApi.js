const express = require('express');
const catApi = express();

const mongoose = require('mongoose');
const CatSchema = require('../mongoDBmodels/testCatModel');

catApi.route('/cats')

// POST NEW document -- Body JSON format: { "name": "name", "color": "color" }
.post((req, res, err) => {
    console.log("posting new cat", req.body.name);
    CatSchema.create(req.body, err =>
    {
        if (err)
            // res.send(err);
            res.render('error', { error: err });
        // See documentation about Express catchall errors:
        // https://expressjs.com/en/guide/error-handling.html

        res.json({
            status: 201,
            body: { "New cat created:": req.body }
        })
    })
})

// GET ALL
.get((req, res) => {
    CatSchema.find((err, cats) => {
        if (err)
            res.send(err);
        res.json(cats);
    });
});

// GET ONE BY NAME (allows partial string search, case-insensitive)
// use "req.params.name" as request
catApi.route('/cats/:name').get((req, res) => {
    CatSchema.find({"name": { $regex: req.params.name, $options:'i' } }, (err, cat) => {
        if (err)
            res.send(err);
        res.json(cat);
    });
});

/*    // Use dot notation for embeded fields.
    // Example:
    //  { "restaurant_id" : "41156888" },
    //  { $set: { "address.street": "East 31st Street" } }
 */
// UPDATE ONE by name -- JSON request body format: { "color": "color" }
catApi.route('/cats/:name').put((req, res) => {
    CatSchema.updateOne(
        { "name": req.params.name },
        { $set: { "color": req.body.color } }, err => {
            if (err)
                res.send(err);
            res.json({ "message": req.params.name + " is now " + req.body.color });
        });
});

// DELETE ONE by name
catApi.route('/cats/:name').delete((req, res) => {
    CatSchema.deleteOne({ "name": req.params.name }, err => {
        if (err)
            res.send(err);
        res.send("Deleted " + req.params.name)
    });
});

module.exports = catApi;