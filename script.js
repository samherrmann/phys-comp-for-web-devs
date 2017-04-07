nw.require("nwjs-j5-fix").fix();
nw.Window.get().showDevTools();

var five = nw.require("johnny-five");
var board = new five.Board({
    port: "/dev/ttyUSB0"
});

board.on("ready", function() {
    console.log("I can see the board!");

    var pin = 13;
        interval = 250;

    var led = new five.Led();
    led.blink(interval);
});