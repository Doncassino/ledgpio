var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/on', function(req, res){
    console.log('Allumez');
    res.redirect('/');
})

app.post('/off', function(req, res){
    console.log('Eteindre');
    res.redirect('/');
})

app.listen(8000);