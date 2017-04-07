nw.require("nwjs-j5-fix").fix();

var five = nw.require("johnny-five");
var board = new five.Board({
    port: "/dev/ttyUSB0"
});

window.addEventListener("DOMContentLoaded", function() {

    var osc = new Tone.Oscillator(440, "sine").toMaster();
    osc.start();

     board.on("ready", function() {
        console.log("I can see the board!");

        var led = new five.Led();
        led.on();

        var proximity = new five.Proximity({
            controller: "2Y0A21",
            pin: "A0"
        });

        proximity.within([8, 65], "cm", function() {
            console.log(this.cm);
        });
    });
    Particle.startRendering(context, particles);
});

