var express = require('express');
var router = express.Router();
var userService = require('./user.service');

// routes
router.post('/login', login);
router.post('/register', register);
router.put('/update', update);
// router.get('/resetpassword/:id/:token', userResetPassword);

module.exports = router;

function login(req, res) {
    userService.authenticate(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
                res.status(400).send('Login failed.');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function register(req, res) {
    userService.create(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    userService.update(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

// function resetPassword(req, res) {
//     if (req.body._id !== undefined) {
//         var _id = req.body._id;

//         userService.passwordReset({ _id: req.body._id }, {
//             $set: {
//                 "displayName" : req.body.displayName
//             }

//         })
//             .then(exists => {
//                 console.log("secret: " + user.password + '-' + user.created.getTime())
//             })
//             .catch(function (err) {
//                 res.status(400).send(err);
//             });

//         // TODO: Make this a one-time-use token by using the user's
//         // current password hash from the database, and combine it
//         // with the user's created date to make a very unique secret key!
//         // For example:
//         // var secret = user.password + ‘-' + user.created.getTime();
//         // var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';

//         var token = jwt.encode(payload, secret);

//         // TODO: Send email containing link to reset password.
//         // In our case, will just return a link to click.
//         // console.log(payload.id + '/' + token');
//     } else {
//         res.send(error);
//     }
// }

// function userResetPassword(req, res) {
//     // TODO: Fetch user from database using
//     // req.params._id
//     // TODO: Decrypt one-time-use token using the user's
//     // current password hash from the database and combine it
//     // with the user's created date to make a very unique secret key!
//     // For example,
//     // var secret = user.password + ‘-' + user.created.getTime();
//     // var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';
//     // var payload = jwt.decode(req.params.token, secret);

//     userService.userResetPassword(req.body.username)
//         .then(function () {
//             res.json('success');
//         })
//         .catch(function (err) {
//             res.status(400).send(err);
//         });


//     // TODO: Gracefully handle decoding issues.
//     // Create form to reset password.
//     res.send('<form action="/resetpassword" method="POST">' +
//         '<input type="hidden" name="id" value="' + payload.id + '" />' +
//         '<input type="hidden" name="token" value="' + req.params.token + '" />' +
//         '<input type="password" name="password" value="" placeholder="Enter your new password..." />' +
//         '<input type="submit" value="Reset Password" />' +
//         '</form>');
// }

// function updateUser() {
    // userService.update(req.params._id, req.body)
    //     .then(function () {
    //         res.json('success');
    //     })
    //     .catch(function (err) {
    //         res.status(400).send(err);
    //     });
// }

// function _delete(req, res) {
//     userService.delete(req.params._id)
//         .then(function () {
//             res.json('success');
//         })
//         .catch(function (err) {
//             res.status(400).send(err);
//         });
// }