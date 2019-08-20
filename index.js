let socket = require('socket.io');
let http = require('http');
let server = http.createServer();
io = socket.listen(server);

io.on('connection', (connection) => { 

  console.log('['+connection.id+']' + ' new-connection');

  connection.on('disconnect', function() {
    //io.emit('broadcast', {user: name, event: 'left'});
  });

  connection.on('user-connect', function (name) {
    console.log('['+connection.id+']' + ' user-connect: ', name);
    connection.name = name;
    io.emit('broadcast', {user: name, event: 'joined'});
  });

  connection.on('add-message', (message) => {
    console.log('['+connection.id+']' + ' add-message: ', message);
    io.emit('message', {text: message.text,
                        from: connection.eventNames,
                        created: new Date() });
  });

});

var port = process.env.PORT || 3001;

server.listen(port, function () {
  console.log('open http://localhost:' + port);
});