button = document.querySelector("#button");
main = document.querySelector("#main");

const audio = new Audio("audio/sheesh.mp3");
const delayInMilliseconds = 1500;

button.addEventListener('click', () => {
  audio.play();
  setTimeout(function() {
  button.innerText = "SHEEEEEEEEESH!";
  }, delayInMilliseconds);
});





