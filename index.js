var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var list = require('./danhsachsv.js');


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

  
io.on('connection', function(socket){
    socket.on('MSSV', function(msg){
      io.emit('MSSV', list.Findsinhvien(msg));
    });
  });
    

http.listen(3000, function(){
  console.log('listening on port:3000');
  
});

