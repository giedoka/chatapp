const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = process.env.PORT || 3000;

const app = express();
const http = require('http').Server(app)
const io= require('socket.io')(http)

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/*app.listen(port, () => {
    console.log("Server running on localhost:" + port);
});*/

io.sockets.on('connection', function(socket){
    console.log('Socket connected');
    socket.on('conversation', conversationId => {
        console.log(conversationId);
        socket.join(conversationId);
    });
    socket.on('message', (msg) => {
        // io.emit('new message', msg);
        io.in(msg.conversationId).emit('new message', msg);
    });
});

const server = http.listen(port, () => {
    console.log("Server running on localhost:", server.address().port)
})