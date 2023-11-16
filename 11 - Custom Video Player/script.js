/*Get our elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

/* Build out functions */

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

/* Hook up the event*/

video.addEventListener("click", togglePlay);
