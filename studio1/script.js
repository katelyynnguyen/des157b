(function(){
    'use strict';
    console.log("reading js");

    const fs = document.querySelector('.fas');

    fs.addEventListener('click', function(){
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

    const intervalID = setInterval(checkTime, 1000);
    const btn = document.querySelector('#gray');
    const color = document.querySelector('.color');
    const video = document.querySelector('#lake');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');

    function checkTime() {
        if (0.5 < video.currentTime && video.currentTime < 2 ) {
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }
        if (2.5 < video.currentTime && video.currentTime < 5) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }
        if (5 < video.currentTime && video.currentTime < 7.5) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }
        if (7.5 < video.currentTime && video.currentTime < 9.5) {
            line4.className = "showing";
        } else {
            line4.className = "hidden";
        }
    }

    btn.addEventListener('click', function(event){
        event.preventDefault();
        if (color.className === "color") {
            color.className = "bw";
        } else {
            color.className = "color";
        }
    });




})();
