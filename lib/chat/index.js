module.exports = function(server)
{
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {
    console.log('Client connected');
    socket.on('disconnect', function() {
      console.log('A user has disconnected');
    });
  });

  return io;
}
