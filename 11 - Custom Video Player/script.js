/*Get our elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

/* Build out functions */

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

/* Hook up the event*/
