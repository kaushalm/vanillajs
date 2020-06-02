let textarea = document.querySelector('#fetchData');

function loadData() {
  //const proxyurl = "https://cors-anywhere.herokuapp.com/";
  fetch("https://hn.algolia.com/api/v1/search?query=git",{
    //mode: 'no-cors', // no-cors, *cors, same-origin
  })
    .then(response => {
      console.log(response);
      textarea.innerHTML= JSON.stringify(response);
    })
    .then(data => {
      console.log(data);
    });
}
