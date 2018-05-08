var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


server.listen(process.env.port || 4000);

console.log("Server is Listening");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.sockets.on('connection', function (socket) {
    console.log("Connected")

    socket.on('draw circle', function (fun) {
        fun()
    })
});


