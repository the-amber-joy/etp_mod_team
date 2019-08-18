require('dotenv').config();
const cors = require('cors');
const favicon = require('serve-favicon');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressJwt = require('express-jwt');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const users = require('./users/users.controller');
const api = require('./api/offenders');

let DBconnection = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + process.env.MONGODB_URI);
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
// app.use(favicon(path.join(__dirname, '/dist/assets', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(expressJwt({
    secret: process.env.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/users/login', '/users/register'] }));

// error handler
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid Token');
    } else {
        throw err;
    }
});

app.use('/api', api);
app.use('/users', users);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// SET PORT AND START SERVER
app.set('port', process.env.PORT);
const activePort = app.get('port');

app.listen(activePort, () => {
    console.log('Makin\' big gainz on port ' + activePort + '. BOOM!');
});