var express = require('express');
var bodyParse = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

var urlencodedParser = bodyParse.urlencoded({extended: false});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.post('/loginSuccess', urlencodedParser, function(req, res){
  console.log(req.body);
  //if(!req.body) return res.sendStatus(400)
  res.render('contactsuccess', {data: req.body });
});


app.listen('3004');
