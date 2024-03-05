let progressBar = document.querySelector(".progress-bar input");
let song = document.querySelector(".song");
let songControl = document.getElementById("control");

song.onloadedmetadata = () => {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
};

songControl.addEventListener("click", () => {
  if (songControl.classList.contains("fa-pause")) {
    song.pause();
    songControl.classList.remove("fa-pause");
    songControl.classList.add("fa-play");
  } else {
    song.play();
    songControl.classList.add("fa-pause");
    songControl.classList.remove("fa-play");
  }
});

if (song.play()) {
  setInterval(() => {
    progressBar.value = song.currentTime;
  }, 500);
}

progressBar.addEventListener("change", () => {
  song.play();
  song.currentTime = progressBar.value;
  songControl.classList.add("fa-pause");
  songControl.classList.remove("fa-play");
});
