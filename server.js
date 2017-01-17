var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index.html');
});// 



server.listen(3000, function() {
  console.log('listening on port 3000');
});
