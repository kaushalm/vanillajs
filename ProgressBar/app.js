let input = document.querySelector("#interval");
let bar = document.querySelector(".progressBar");

function showProgress() {
  let progress = 0;
  let time = input.value * 1000;

  let intervalId = setInterval(() => {
    progress = progress + 10;
    if (progress == 100) {
      clearInterval(intervalId);
    }
    //add width
    bar.style.width = progress + "%";
  }, time / 10);
}
