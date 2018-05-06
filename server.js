const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
// const flash = require('flash');
const expressJwt = require('express-jwt');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// const secret = require('./config').secret;
// const db = require('./config').db;
const auth = require('./auth/users.controller');
const api = require('./api/offenders');

let DBconnection = mongoose.connect(process.env.MONGODB_URI || db.local );

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    if (process.env.MONGODB_URI == undefined) {
        console.log('Mongoose connected to ' + db.local);
    } else {
        console.log('Mongoose connected to ' + process.env.MONGODB_URI);
    }
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app termination', function () {
        process.exit(0);
    });
});

// app.use(flash());
app.use(cors());
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressJwt({
    secret: process.env.secret || secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/auth/login', '/auth/register'] }));

// error handler
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid Token');
    } else {
        throw err;
    }
});

app.use('/api', api);
app.use('/auth', auth);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// SET PORT AND START SERVER
app.set('port', process.env.PORT || 3000);
const activePort = app.get('port');

app.listen(activePort, () => {
    console.log('Makin\' big gainz on port ' + activePort + '. BOOM!');
});