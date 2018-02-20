//var fs = require('fs');
var http = require('http');


//var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

var server = http.createServer(function(req, res){
  //res.writeHead(200, {'Content-Type':'text/html'});
  res.writeHead(200, {'Content-Type':'application/json'});
  var newObj = {
    name: 'manoj',
    age: '31',
    job: 'Developer'
  };
  res.end(JSON.stringify(newObj));
  //readStream.pipe(res);
  //res.end('He')
});

server.listen(3003, '127.0.0.1');
console.log('server started');
