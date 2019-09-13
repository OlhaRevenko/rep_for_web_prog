var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style.css'));
});
/*//
app.get('/request', function(req, res) {
    res.sendFile(path.join(__dirname + '/file.ext'));
});
//*/

app.listen(8080);
