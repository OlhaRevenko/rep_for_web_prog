var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');

app.use(cors({
    origin: '*'
  }));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
/*
app.get('/style.less', function(req, res) {
    res.sendFile(path.join(__dirname + '/style.less'));
});
app.get('/Semantic-UI-CSS-master/semantic.min.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/Semantic-UI-CSS-master/semantic.min.css'));
});
app.get('/Semantic-UI-CSS-master/semantic.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/Semantic-UI-CSS-master/semantic.min.js'));
});
//*/
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + req.url));
});

/*//
app.get('/request', function(req, res) {
    res.sendFile(path.join(__dirname + '/file.ext'));
});
//*/


app.listen(8080);
