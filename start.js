"use strict";

var five = require("johnny-five"),
  board = new five.Board({ port: "COM4" }),
  led = null,
  express = require('express'),
  app = express(),
  port = 8000;

board.on("ready", function() {
  console.log("### Board ready!");
  led = new five.Led(12);
});

app.get('/led/:mode', function (req, res) {
  if(led) {
    var status = "OK";
    switch(req.params.mode) {
      case "on":
        led.on();
        break;
      case "off":
        led.off();
        break;
     case "blink":
       led.blink();
       break;
     case "stop":
       led.stop();
       break;
     default:
       status = "Unknown: " + req.params.mode;
       break;
     }
     console.log(status);
     res.send(status);
   } else {
     res.send('Board NOT ready!')
   }
});

app.listen(port, function () {
 console.log('Listening on port ' + port);
});

//curl -X GET ‘http://localhost:8000/led/on’
//curl -X GET ‘http://localhost:8000/led/off’
//curl -X GET ‘http://localhost:8000/led/blink’
//curl -X GET ‘http://localhost:8000/led/stop’
