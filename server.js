var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app); //start a new server and use express app as boiler

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
	console.log('Server Started!');
})