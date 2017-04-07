nw.Window.get().showDevTools();

var os = nw.require("os");
console.log(os.type);

$(document).ready(function(){
    $("body").append(os.hostname);
});

chrome.tts.speak("ForwardJS rocks!");