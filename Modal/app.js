let openModal = document.querySelectorAll(".openModal");
let closemodal = document.querySelectorAll(".closemodal");
let modal = document.querySelectorAll(".modal");
let overlay = document.querySelectorAll("#overlay");

openModal[0].addEventListener("click", () => {
  modal[0].classList.add("active");
  overlay[0].classList.add("active");
});

closemodal[0].addEventListener("click", () => {
  modal[0].classList.remove("active");
  overlay[0].classList.remove("active");
});

overlay[0].addEventListener("click", () => {
  modal[0].classList.remove("active");
  overlay[0].classList.remove("active");
});
