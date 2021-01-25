let dropzone = document.querySelector("#dropzone");
let fileUpload = document.querySelector("#fileUpload");


dropzone.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropzone.className = "dropzone";
  console.log("dragleave");
});

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.className = "dragover";
  console.log("dragover");
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("drop");

  var reader = new FileReader();
    reader.readAsDataURL(e.dataTransfer.files[0]);
    reader.onload = function(readEvent) {
    document.querySelector("#image").append("<img src='"+readEvent.target.result+"' />");
    }
});

dropzone.addEventListener("click", (e) => {
  console.log("click");
});


fileUpload.addEventListener("change", (e) => {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);
    reader.onload = function(readEvent) {
    document.querySelector("#image").append("<img src='"+readEvent.target.result+"' />");
    }
    console.log("file Upload");
  });
