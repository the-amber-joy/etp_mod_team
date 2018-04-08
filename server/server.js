const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const catApi = require('./catTestApi');
const adminApi = require('./adminApi');
const api = require('./api');

app.use(express.static(__dirname + '../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // to parse the request body
app.use('/catApi', catApi);
app.use('/api', api);
app.use('/admin', adminApi);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../dist/index.html'));
});

// SET PORT AND START SERVER
app.set('port', process.env.PORT || 3000);
const activePort = app.get('port');

app.listen(activePort, () => {
    console.log('Feel the heat on port ' + activePort + '!');
});