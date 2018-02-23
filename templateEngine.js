var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
  //res.sendFile(__dirname + '/index.html');
  var hobbies = ['Cricket', 'Carrom', 'Table Tennis', 'Volleyball'];
  //res.render('profile', {name: req.params.name, hobbies: hobbies})
  res.render('profile', {hobbies: hobbies})
});

app.get('/jobs', function(req, res){
  res.render('jobs');
});

app.get('/contact', function(req, res){
  res.render('contact');
});



app.listen(3002);
