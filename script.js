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

        var led = new five.Led.RGB({
            pins: {
                red: 3,
                blue: 5,
                green: 6
            }
        });

        var settings = QuickSettings.create(100, 100, "Settings")
            .addRange("intensity", 0, 100, 50, 1, function() {
                led.intensity(settings.getRangeValue("intensity"));
            })
            .addColor("color", "#ffffff", function() {
                led.color(settings.getColor("color"));
            })
            .addButton("toggle", function() {
                led.toggle();
            });

            var image = document.querySelector("img");
            var canvas = document.querySelector("canvas");
            var context = canvas.getContext("2d");

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            context.drawImage(image, 0, 0, image.width, image.height);
            canvas.addEventListener("mousemove", function(e) {
                let [r, g, b, a] = context.getImageData(e.clientX, e.clientY, 1, 1).data;
                led.color({
                    red: r,
                    green: g,
                    blue: b
                });
            });
    });
});