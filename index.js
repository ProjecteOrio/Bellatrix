let app  = require('express')();
let http = require('http').Server(app);
let io   = require('socket.io')(http);

io.on('connection', (socket) => { });

var port = process.env.PORT || 3001;

http.listen(port, function () {
  console.log('open http://localhost:' + port);
});