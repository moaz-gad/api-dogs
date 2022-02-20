var xhr = new XMLHttpRequest();
xhr.open("GET", "https://dog.ceo/api/breeds/list/all", true);

function getInfo() {
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      var info = JSON.parse(this.responseText);
      var dataMessages = info.message;
      var output = "<option>Choose a dog breed</option>";
      for (var i in dataMessages) {
        output += `
            <select>
            
            <option>${i}</option>
            </select>
            
            `;
      }
      document.getElementById("dogs").innerHTML = output;
    }
  };
  xhr.send();
}
getInfo();
var anotherXHR = new XMLHttpRequest();
function respondFunc(breed) {
  anotherXHR.open("GET", `https://dog.ceo/api/breed/${breed}/images`);
  if (breed != "Choose a dog breed") {
    dataFunc();
  }
}
function dataFunc() {
  anotherXHR.onload = function () {
    if (this.status == 200 && this.readyState == 4) {
      var res = JSON.parse(this.responseText);
      createSlideShow(res.message);
    }
  };
  anotherXHR.send();
}
function createSlideShow(images) {
  document.getElementById(
    "slideshow"
  ).innerHTML = `<div class = "slide" style = "background-image:url('${images[0]}')"></div>
  <div class = "slide" style = "background-image:url('${images[0]}')"></div>`;
}
