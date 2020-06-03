let keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("click", ()=>{playSound(key)});
});

function playSound(key) {
  console.log(key);
  let sound = document.getElementById(key.dataset.sound);
  sound.play();
}
