var five = require("johnny-five"),

board = new five.Board({ port: "COM4" });

board.on("ready", function() {
  // Create an Led on pin 13
 

  var led13 = new five.Led(13);
  var led12 = new five.Led(12);
  var led11 = new five.Led(11);

  setInterval(function() {

    setTimeout(function() {
      led13.on();
      setTimeout(function() {
        led13.off();
      }, 500);
    }, 3000);
    setTimeout(function() {
      led12.on();
      setTimeout(function() {
        led12.off();
      }, 1000);
    }, 2000);
    setTimeout(function() {
      led11.on();
      setTimeout(function() {
        led11.off();
      }, 150);
    }, 1400);

  }, 4000);

});