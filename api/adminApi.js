const express = require('express');
const api = express();

const Admin = require('../mongoDBmodels/admin_DBmodel');


api.route('/admin')
    .post((req, res, err) => {
    console.log("posting new admin", req.body.name);
    Admin.create(req.body, err => {
        if (err)
            res.send(err);
        res.json({
            status: 201,
            body: { "New admin created:": req.body.name }
        })
    })
})

    // GET ALL
api.route('/admin').get((req, res) => {
    Admin.find((err, admin) => {
        if (err)
            res.send(err);
        res.json(admin);
    });
});


module.exports = api;