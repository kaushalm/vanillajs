let openModal = document.querySelectorAll(".openModal");
let closemodal = document.querySelectorAll(".closemodal");
let modal = document.querySelectorAll(".modal");
let overlay = document.querySelectorAll("#overlay");

openModal[0].addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

closemodal[0].addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

overlay[0].addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
