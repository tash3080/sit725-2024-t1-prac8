var express = require("express");
var app = express();
var port = process.env.port || 3000;

let router= require('./routers/router');

let http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
});



app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/flower', router);


// app.listen(port, () => {
//     console.log(`Express server started on port ${port}`);
// });

http.listen(3000, () => { 
    console.log('express server started'); 
});