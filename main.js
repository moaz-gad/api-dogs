const getInfo = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createList(data.message);
};
getInfo();
const createList = (dogLists) => {
  document.getElementById("dog").innerHTML = `
  <select onchange="dogImage(this.value)">
  <option>Choose A Dog</option>
  ${Object.keys(dogLists).map((dog) => {
    return `<option> ${dog} </option>`;
  })}
 
  </select>
  `;
};
//End Making List
const dogImage = async (image) => {
  if (image !== "Choose A Dog") {
    const response = await fetch(`https://dog.ceo/api/breed/${image}/images`);
    const data = await response.json();

    showImage(data.message);
  }
};

const showImage = (images) => {
  document.getElementById(
    "slideshow"
  ).innerHTML = `<div class="slide" style = "background-image: url('${images[0]}')"></div>`;
};
