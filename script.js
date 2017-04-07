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

    var settings = QuickSettings.create(100, 100, "Particles Settings")
        .addRange("size", 0, 4, 1, 0.1)
        .addColor("color", "#ffffff");

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

            var proximitySquare = Math.pow(65 - this.cm, 2);
            var count = proximitySquare / 100;
            var size = proximitySquare / 1000;
            var speed = proximitySquare / 50;

            for (var i = 0; i < count; i++) {
                var particle = new Particle({
                    x: canvas.width/2,
                    y: canvas.height/2,
                    radius: size * settings.getNumberValue("size"),
                    speed: speed,
                    color: settings.getColor("color")
                });

                particles.push(particle);
            }
        });
    });
    Particle.startRendering(context, particles);
});

