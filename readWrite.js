var fs = require('fs');

//Synchronous Process
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);
fs.writeFileSync('writeMe.txt', readMe);

//Asynchronous
fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
});

fs.unlink('writeMe.txt');
fs.mkdirSync('stuff');
fs.writeFileSync('readMe.txt', 'Hey you have done the read');

fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  })
});

fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');
});
