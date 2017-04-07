nw.require("nwjs-j5-fix").fix();

var five = nw.require("johnny-five");
var board = new five.Board({
    port: "/dev/ttyUSB0"
});

var particles = [];

window.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementsByTagName("canvas")[0];
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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

            for (var i = 0; i < 5; i++) {
                var particle = new Particle({
                    x: canvas.width/2,
                    y: canvas.height/2,
                    radius: 5,
                    speed: 10,
                    color: "#ffffff"
                });

                particles.push(particle);
            }
        });
    });
    Particle.startRendering(context, particles);
});

