var http = require('http');
var express = require('express');
var app = express();
var partials = require('express-partial');


app.use(partial());

app.use(express.static('public'));

// app.get('/', function(req, res) {
//   res.render('newList.html');
// });

// app.get('/newList', function(req, res) {
//   res.render('index.html');
// });

module.exports = app;