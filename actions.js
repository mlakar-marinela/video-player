let video = document.getElementById('video');
const playBtn = document.getElementById('play');
const fileBtn = document.getElementById('btn');

// opening a video from a local drive;

function openVideo(){
    var file=document.getElementById('choose').files[0]; 
    var fileURL = window.URL.createObjectURL(file);
    video.src=fileURL;
    video.load();
   }
  fileBtn.addEventListener('change', openVideo);

  // playing the video;

function play() {
    video.play();
}
playBtn.addEventListener("click", play);

// pausing the video;

const pauseBtn = document.getElementById('pause');
function pause() {
    video.pause();
}
pauseBtn.addEventListener("click", pause);

// putting the video player in fullscreen mode; 

const fullscreenBtn = document.getElementById('fullscreen');
const player = document.getElementById('player');
const controls = document.getElementById('controls'); 
function fullscreen() {
    if (player.requestFullscreen) {
       player.requestFullscreen();
    }
}
fullscreenBtn.addEventListener("click", fullscreen);

// exiting the fullscreen mode;

function exitFullscreen(){
    document.exitFullscreen();
}
fullscreenBtn.addEventListener("click", exitFullscreen);

// getting the duration of the video ; 

let duration;
let minutes;
let seconds;
let timer = document.getElementById('timer');
video.addEventListener('loadeddata', function () {
    duration = Math.floor(video.duration);
    minutes = parseInt(duration / 60);
    seconds = parseInt(duration % 60);
    if (minutes < 10 && seconds < 10)  {
        timer.innerHTML = "0" + minutes + ":" + "0" + seconds;
    }
    else {
       if (minutes < 10 && seconds >= 10 ){
        timer.innerHTML = "0" + minutes + ":" + seconds;    
       }
       else{
        if ( minutes >= 10 && seconds < 10){
            timer.innerHTML = minutes + ":" + "0" + seconds;
        }
        else{
            timer.innerHTML = minutes + ":" + seconds;
        }
       }
    }

    // updating the duration of the video (when the video is playing);

    video.ontimeupdate = (e) => {
        duration1 = Math.floor(video.currentTime);
        minutes = parseInt(duration1 / 60);
        seconds = parseInt(duration1 % 60);
        if (minutes < 10 && seconds < 10)  {
            timer.innerHTML = "0" + minutes + ":" + "0" + seconds;
        }
        else {
           if (minutes < 10 && seconds >= 10 ){
            timer.innerHTML = "0" + minutes + ":" + seconds;    
           }
           else{
            if ( minutes >= 10 && seconds < 10){
                timer.innerHTML = minutes + ":" + "0" + seconds;
            }
            else{
                timer.innerHTML = minutes + ":"  + seconds;
            }
           }
        }
    }

});

// showing the progress that the video has done while playing;

let progressBar = document.getElementById('progress');
video.addEventListener('timeupdate', function () {
    let percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percent + '%';
}); 