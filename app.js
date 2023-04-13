const box_img = document.getElementById("box_img");
const img = document.querySelectorAll(".slide_img");

let currentImage = 0;
const maxImagesIndex = img.length - 1;

function showImage() {
  img[currentImage].style.opacity = 1;
  console.log(img[currentImage]);
}
function hideImage() {
  img[currentImage].style.opacity = 0;
}

function nextImage() {
  hideImage();
  currentImage++;
  if (currentImage > maxImagesIndex) {
    currentImage = 0;
  }
  showImage();
}
showImage();

setInterval(nextImage, 3000);

const play_button = document.getElementById("play_button");
const pause_button = document.getElementById("pause_button");
const audio = new Audio("./music/music1.mp3");

play_button.addEventListener("click", () => {
  audio.play();
});
pause_button.addEventListener("click", () => {
  audio.pause();
});
