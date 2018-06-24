var express = require('express');
var app = express();
var Gpio = require('onoff').Gpio;

var LED = new Gpio(4, 'out');

function blinkLED(){
  if(LED.readSync()===0){
  	LED.writeSync(1);
  }else{
	LED.writeSync(0);
  }
}

function endBlink(blinkInterval){
  clearInterval(blinkInterval);
  LED.writeSync(0);
  LED.unexport();
}


app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/on', function(req, res){
    var blinkInterval = setInterval(blinkLED, 250);
    console.log('Allumez');
    res.redirect('/');
})

app.post('/off', function(req, res){
    var blinkInterval = setInterval(blinkLED, 250);
    endBlink(blinkInterval);
    console.log('Eteindre');
    res.redirect('/');
})




app.listen(8000);
