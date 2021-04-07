let container = document.querySelector(".container");

for (i = 0; i < 16; i++) {

  let etchContainer = document.createElement("div");

  etchContainer.classList.add("etch-div");

  etchContainer.classList.add("color-new")

  container.appendChild(etchContainer);
}

let numDivs = document.querySelectorAll(".etch-div").length;

for(i = 0; i < numDivs; i++){
    document.querySelectorAll(".etch-div")[i].addEventListener("mouseover", function (e) {
      e.target.style.background = 'blue';
  });
}


document.querySelector("button").addEventListener("click", handleClick);


function handleClick() {
  document.querySelectorAll(".etch-div").style.background = "red";
}



