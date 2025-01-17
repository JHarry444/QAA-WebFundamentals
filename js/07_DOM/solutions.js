// Use document.write to add a paragraph to the page with your name in it.
document.write("<p>Jordan</p>");
// Repeat step 1 without using document.write
const newP = document.createElement("p");
document.body.appendChild(newP);
newP.textContent = "Jordan";
// In the HTML, add a blank <p> then change its text using JavaScript.
const myPara = document.getElementById("myPara");

myPara.textContent = "Bl00p!";
// Grab the object that you created yesterday to represent yourself and add the data to the page using the DOM manipulation methods you've been shown
const me = {
    name: "Jordan",
    age: 30,
    specialisms: ["Software", "Testing", "Muppetry"]
}

const myName = document.createElement("p");
myName.textContent = `Name: ${me.name}`;
myName.style.color = "blue";
document.body.appendChild(myName);

const myAge = document.createElement("p");
myAge.textContent = `Age: ${me.age}`;
myAge.className = "myInput";
document.body.appendChild(myAge);

const specialismsHeader = document.createElement("p");
specialismsHeader.textContent = "Specialisms:";
specialismsHeader.className = "myInput";
document.body.appendChild(specialismsHeader);

const myHobbies = document.createElement("ul");

for (let i = 0; i < me.specialisms.length; i = i + 1) {
    const specialism = document.createElement("li");
    specialism.textContent = me.specialisms[i];
    myHobbies.appendChild(specialism);
}

document.body.appendChild(myHobbies);

// Extension:
// Create some styling for your new webpage and apply it to your new elements by setting the className in JS



