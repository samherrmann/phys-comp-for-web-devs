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

        setInterval(function() {
            if(proximity.cm > 8 && proximity.cm < 65) {
                if(osc.volume.value <= -Infinity) {
                    osc.volume.rampTo(-6, 0.02);
                } else {
                    osc.frequency.rampTo(proximity.cm * 20, 0.1);
                }
            } else {
                if(osc.volume.value > -Infinity) {
                    osc.volume.rampTo(-Infinity, 1);
                }
            }
        }, 25);
    });
});

