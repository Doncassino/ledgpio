var express = require('express');
var app = express();
var Gpio = require('onoff').Gpio;

var LED = new Gpio(4, 'out');



function endBlink(){
//   clearInterval(blinkInterval);
  LED.writeSync(0);
  LED.unexport();
}


app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/on', function(req, res){
    LED.writeSync(1);
    console.log('Allumez');
    res.redirect('/');
})

app.post('/off', function(req, res){
    endBlink();
    console.log('Eteindre');
    res.redirect('/');
})

app.listen(8000);
