const express = require('express');
const auth = express();
const flash = require('connect-flash');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const saltRounds = 8;

const Admin = require('../mongoDBmodels/admin_DBmodel');

const hash = 'thisIsTheHashedPasswordInTheDatabase';
var plaintextPassword = 'bacon';
var someOtherPlaintextPassword = 'not_bacon';

// BCRYPT STUFF TO ENCRYPT PASSWORDS
// (auto-gen a salt and hash)
bcrypt.hash(plaintextPassword, saltRounds, function (err, hash) {
    // Store the hashed password in your password DB.
});

// TO CHECK PASSWORDS:
// Load hash from your password DB.
bcrypt.compare(plaintextPassword, hash, function (err, res) {
    // res == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function (err, res) {
    // res == false
});

// PASSPORT CONFIGURATION
passport.use(new LocalStrategy(
    function (username, password, done) {
        Admin.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Username not found.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

// ROUTE
auth.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);

// With the flash middleware in place, all requests will have a req.flash() function that can be used for flash messages.
auth.get('/flash', function (req, res) {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/');
});

auth.get('/', function (req, res) {
    // Get an array of flash messages by passing the key to req.flash()
    res.render('index', { messages: req.flash('info') });
});

// HTML LOGIN FORM
{/* <form action="/login" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username" />
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password" />
    </div>
    <div>
        <input type="submit" value="Log In" />
    </div>
</form> */}

module.exports = auth;