const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const catApi = require('./api/catTestApi');
const adminApi = require('./api/adminApi');
const api = require('./api/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/etp_mod_team');

app.use(express.static('/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // to parse the request body
app.use('/catApi', catApi);
app.use('/api', api);
app.use('/admin', adminApi);

app.get('/', function (req, res) {
    res.sendFile(path.join('/dist/index.html'));
});

// SET PORT AND START SERVER
app.set('port', process.env.PORT || 3000);
const activePort = app.get('port');

app.listen(activePort, () => {
    console.log('Makin\' big gainz on port ' + activePort + '. BOOM!');
});