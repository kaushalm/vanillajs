let dropzone = document.querySelector("#dropzone");
let fileUpload = document.querySelector("#fileUpload");
let imagepreview = document.querySelector("#imagepreview");

dropzone.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropzone.className = "dropzone";
});

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.className = "dragover";
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();

  //add a file reder to read contents of file
  const reader = new FileReader();
  reader.onload = function (readEvent) {
    imagepreview.setAttribute("src", readEvent.target.result);
  };
  reader.readAsDataURL(e.dataTransfer.files[0]);
});

dropzone.addEventListener("click", (e) => {
  console.log("click");
});

fileUpload.addEventListener("change", (e) => {
  e.preventDefault();
  //add a file reder to read contents of file

  const reader = new FileReader();
  reader.onload = function (readEvent) {
    imagepreview.setAttribute("src", readEvent.target.result);
  };

  reader.readAsDataURL(e.currentTarget.files[0]);
});
