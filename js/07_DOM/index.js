// can use document.write to add basic 
// elements to the page
document.write("<p>Hello, World!</p>");

// creates an element but has NOT 
// added it to the page
const newP = document.createElement("p");

console.log("newP:", newP);
// debugger;
newP.textContent = "Freshly created element";

console.log("newP:", newP);

newP.id = "newP";

document.body.appendChild(newP);

const p2 = document.createElement("p");

p2.textContent = "Targeted addition";

// returns 'null' if it can't find the element
const outputSection = document.getElementById("output");

outputSection.appendChild(p2);


const styledElement = document.createElement("p");

styledElement.className = "myClass";

document.body.appendChild(styledElement);