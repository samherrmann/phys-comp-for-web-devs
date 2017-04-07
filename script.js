nw.require("nwjs-j5-fix").fix();

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


    QuickSettings.create(100, 100, "LED Settings")
        .addRange("interval", 50, 500, 250, 5, function(value) {
            interval = value;
            led.blink(interval);
        })
        .addButton("Toggle", function(value) {
            if(led.isRunning) {
                led.stop().off();
            } else {
                led.blink(interval);
            }
        })
});