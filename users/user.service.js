var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
const User = require('../mongoDBmodels/admin_DBmodel')
var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.create = create;
service.update = update;

module.exports = service;

function authenticate(username, password) {
    var deferred = Q.defer();

    User.findOne({ username: username }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            deferred.resolve({
                firstName: user.firstName,
                lastName: user.lastName,
                displayName: user.displayName,
                username: user.username,
                _id: user._id,
                token: jwt.sign({ sub: user._id }, process.env.secret)
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getAll() {
    // var deferred = Q.defer();

    // db.users.find().toArray(function (err, users) {
    //     if (err) deferred.reject(err.name + ': ' + err.message);

    //     // return users (without hashed passwords)
    //     users = _.map(users, function (user) {
    //         return _.omit(user, 'hash');
    //     });

    //     deferred.resolve(users);
    // });

    // return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();

    // validation
    User.findOne(
        { username: userParam.username },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password');

        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);

        User.create(user, (err, doc) => {
            if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        })
    }

    return deferred.promise;
}

function update(userParam) {
    var deferred = Q.defer();

    // validation
    User.findOne(
        { _id: userParam.user._id },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user.displayName !== userParam.user.displayName) {
                // username has changed so check if the new username is already taken
                User.findOne(
                    { displayName: userParam.user.displayName },
                    function (err, user) {
                        if (err) deferred.reject(err.name + ': ' + err.message);

                        if (user) {
                            deferred.reject('Display Name "' + userParam.user.displayName + '" is already taken')
                        } else {
                            updateUser();
                        }
                    });
            } else {
                updateUser();
            }
        });

    function updateUser() {
        // fields to update
        var set = {
            displayName: userParam.user.displayName,
        };

        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        User.update(
            { _id: userParam.user._id },
            { $set: set },
            function (err, res) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                deferred.resolve();
            });
    }

    return deferred.promise;
}