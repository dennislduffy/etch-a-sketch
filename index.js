let container = document.querySelector(".container");

let dimension = prompt("How many squares high would you like the grid? Please enter a number between 0 and 10: ")

if(dimension > 10){

  let dimension = 10

}

document.documentElement.style.setProperty("--dimension", dimension);

for (i = 0; i < dimension * dimension; i++) {

  let etchContainer = document.createElement("div");

  etchContainer.classList.add("etch-div");

  etchContainer.classList.add("color-new");

  container.appendChild(etchContainer);
}

let numDivs = document.querySelectorAll(".etch-div").length;

for(i = 0; i < numDivs; i++){
    document.querySelectorAll(".etch-div")[i].addEventListener("mouseover", function (e) {
      e.target.classList.remove("color-new");
      e.target.classList.add("color-drawn");
      /*style.background = 'blue';*/
  });
}


document.querySelector("button").addEventListener("click", handleClick);


function handleClick() {
  for(i = 0; i < numDivs; i++){
    document.querySelectorAll(".etch-div")[i].classList.remove("color-drawn");
    document.querySelectorAll(".etch-div")[i].classList.add("color-new");
  } 
}



