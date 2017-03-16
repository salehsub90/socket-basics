var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app); //start a new server and use express app as boiler
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) { //socket: some individual connection
	console.log('User connected via socket.io!');


	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);
		socket.broadcast.emit('message', message);
	});

	socket.emit('message', {
		text: 'Welcome to the chat application!'
	});
}); //listen for events

http.listen(PORT, function () {
	console.log('Server Started!');
});