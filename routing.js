var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    readStream.pipe(res)
    //res.end('Welcome to Index');
  } else if(req.url == '/getData'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var newObj = {
      name: 'manoj',
      age: '31',
      job: 'Developer'
    };
    res.end(JSON.stringify(newObj));
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('404 OOPS');
  }
});

server.listen(3001, '127.0.0.1');
console.log('Sever started on 3001');
