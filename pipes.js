var http = require('http');
var fs = require('fs');

//var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//readStream.pipe(writeStream);

var server = http.createServer(function(req, res){
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Hello mano');
  //var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  res.writeHead(200, {'Content-Type': 'text/html'});
  var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Server started');
