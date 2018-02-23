var express = require('express');

var app = express();

app.get('/', function(req, res){
    //res.send('Welcome to the Home');
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  //res.send('Contact Page Here');
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
  res.send('You are viewing the profile name of ' + req.params.name);
});

app.listen(3002);
