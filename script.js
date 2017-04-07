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

        var servo = new five.Servo({
            pin: 10,
            center: true,
        });

        document.querySelector("input").addEventListener("keyup", function(e) {
            if(e.keyCode != 13) return;
            var positions = {
                yes: 30,
                maybe: 90,
                no: 150
            }
            var answer = ["yes", "maybe", "no"][Math.floor(Math.random() * 3)];
            servo.sweep();
            setTimeout(function() {
                servo.stop();
                servo.to(positions[answer]);
            }, 3000);
        });
    });
});