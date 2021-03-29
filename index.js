/*let newPara = document.createElement("p");

let newText = document.createTextNode("Test");

newPara.appendChild(newText);

let container = document.querySelector("div.container");

container.appendChild(newPara);
*/

let container = document.querySelector("div.container");

for(i=0; i<9; i++){

    let etchContainer = document.createElement("div");

    etchContainer.classList.add("etch-div");

    container.appendChild(etchContainer);
}




