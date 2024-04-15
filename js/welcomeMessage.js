var audio = document.getElementById("myAudio");
var video = document.getElementById("myVideo");
var table = document.getElementById("myTable");

var isVideoPlaying = false;

function playAudio() {
   if (!isVideoPlaying && audio.paused) {
      audio.currentTime = 0;
      audio.play();
   }
}

function stopAudio() {
   audio.pause();
   audio.currentTime = 0;
}

var inactivityTimeout;

function resetTimeout() {
   clearTimeout(inactivityTimeout);
   inactivityTimeout = setTimeout(playAudio, 30000);
}

document.addEventListener("mousemove", function () {
   stopAudio();
   resetTimeout();
});

document.addEventListener("keydown", function () {
   stopAudio();
   resetTimeout();
});

document.addEventListener("scroll", function () {
   stopAudio();
   resetTimeout();
});

table.addEventListener("scroll", function () {
   stopAudio();
   resetTimeout();
});

document.addEventListener("touchmove", function () {
   stopAudio();
   resetTimeout();
});

document.addEventListener("touchstart", function () {
   stopAudio();
   resetTimeout();
});

video.addEventListener("play", function () {
   isVideoPlaying = true;
   stopAudio();
});

video.addEventListener("pause", function () {
   isVideoPlaying = false;
   resetTimeout();
});

video.addEventListener("ended", function () {
   isVideoPlaying = false;
   resetTimeout();
});

playAudio();
resetTimeout();
