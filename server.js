var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app); //start a new server and use express app as boiler
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) { //socket: some individual connection
	console.log('User connected via socket.io!');

	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);

		message.timestamp = moment().valueOf();
		//socket.broadcast.emit('message', message); //sends the msg to everyone but myself (my browser)
		io.emit('message', message); //sends the msg to everyone and every browser in chat application
	});

	socket.emit('message', {
		name: 'System',
		text: 'Welcome to the chat application!',
		timestamp: moment().valueOf()
	});
}); //listen for events
  
http.listen(PORT, function () {
	console.log('Server Started!');
});