let textarea = document.querySelector('#fetchData');

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/users", {})
    .then(response => {
      console.log(response);
      textarea.innerHTML= JSON.stringify(response);
    })
    .then(data => {
      console.log(data);
    });
}
