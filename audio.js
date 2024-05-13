window.addEventListener("DOMContentLaded", () => {
    var audio = document.getElementById("intro")
    function playAudio() {
        audio.play;
    }
    window.onload = function() {
        //Variables
        var startAudio = document.getElementById("playButton");
        //Actual event listeners
        startAudio.addEventListener("click", playAudio);
    };
});