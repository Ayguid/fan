
const express = require('express');
const app = express();

var five = require("johnny-five");
var board = new five.Board({
    port: "COM4"
});

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});


board.on("ready", function() {
  var led = new five.Led(13);

  app.get('/', (req, res) => {
    res.send('Hello World! Led is ' +led.isOn);
    led.toggle();
    console.log(led.isOn)
}); 

});





 


