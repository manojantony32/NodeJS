var fs = require('fs');
var http = require('http');

//var streamRead = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var streamWrite = fs.createWriteStream(__dirname + '/writeMe.txt');

// streamRead.on('data', function(chunk){
//   console.log('Chunk of data recieved:')
//   streamWrite.write(chunk)
//   //console.log(chunk);
// });

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  readStream.pipe(res);
  //res.end('He')
});

server.listen(3002, '127.0.0.1');
console.log('server started');
