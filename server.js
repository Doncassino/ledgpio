var express = require('express');
var app = express();
var Gpio = require('onoff').Gpio;

var LED = new Gpio(4, 'out');



function endBlink(){
//   clearInterval(blinkInterval);
  LED.writeSync(0);
  LED.unexport();
}

function blinkLED() { //function to start blinking
    if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
      LED.writeSync(1); //set pin state to 1 (turn LED on)
    } else {
      LED.writeSync(0); //set pin state to 0 (turn LED off)
    }
}

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/on', function(req, res){
    blinkLED();
    console.log('Allumez');
    res.redirect('/');
})

app.post('/off', function(req, res){
    setTimeout(endBlink, 50);
    console.log('Eteindre');
    res.redirect('/');
})

app.listen(8000);
