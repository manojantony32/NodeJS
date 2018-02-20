
var http = require('http');


var server = http.createServer(function(req, res){
  console.log('request was made thru ' +req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello mano, you did');
});

server.listen(3001, '127.0.0.1');
console.log('you are listening to the port 3000');
