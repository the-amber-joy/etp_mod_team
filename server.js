const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const connect = require('connect');
const auth = require('./auth/auth');
const catApi = require('./api/catTestApi');
const adminApi = require('./api/adminApi');
const api = require('./api/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/etp_mod_team');

// https://www.npmjs.com/package/cookie-parser
app.use(cookieParser())
// https://github.com/expressjs/session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(flash());
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/catApi', catApi);
app.use('/api', api);
app.use('/admin', adminApi);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
    mongoose.disconnect();
});


// SET PORT AND START SERVER
app.set('port', process.env.PORT || 3000);
const activePort = app.get('port');

app.listen(activePort, () => {
    console.log('Makin\' big gainz on port ' + activePort + '. BOOM!');
});