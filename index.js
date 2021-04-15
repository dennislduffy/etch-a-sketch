/*create function to make container div*/

function makeContainer(){

  let container = document.createElement("div");

  document.body.appendChild(container);

  container.classList.add("container");

}

/*prompt user for number of divs*/

function promptUser(){

  let dimension = prompt("enter a number: ");

  if(dimension > 100){
    
    dimension = 100;

  }

  return(dimension);

}

/*Create a function to make divs*/

function makeDivs(dimension){

  let container = document.querySelector(".container");

  let numDivs = dimension * dimension;

  for (i = 0; i < numDivs; i++) {

    let etchDiv = document.createElement("div");
    
    etchDiv.classList.add("etch-div");
    
    etchDiv.classList.add("color-new");
    
    container.appendChild(etchDiv);

  }

  for(i = 0; i < numDivs; i++){

    document.querySelectorAll(".etch-div")[i].addEventListener("mouseover", function (e) {

        e.target.classList.remove("color-new");

        e.target.classList.add("color-drawn");

    });
  }
}

/*Remove any existing divs*/

function removeDivs(){

  let numEtch = document.querySelectorAll(".etch-div").length;

  
  for(i = 0; i < numEtch; i++){

    document.querySelectorAll(".etch-div")[0].remove();

  }
  
}

/*put it all together*/

function makeEtch(dimension){

  removeDivs();

  makeContainer();

  /*let dimension = promptUser();*/

  makeDivs(dimension);

  document.documentElement.style.setProperty("--dimension", dimension);

}

/*Add event listener for the button*/
document.querySelector("button").addEventListener("click", function(){
  
  let dimension = promptUser();

  makeEtch(dimension);

});

/*Add event listener for when page loads*/
document.addEventListener("DOMContentLoaded", function(){
  
  let dimension = 16;
  
  makeEtch(dimension);
  
});