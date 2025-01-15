
console.log("Hello!");

if (false) {
    console.log("YO!");
}

console.log("BYE!");

debugger;
// creates a 'breakpoint' that your browser 
// will pause on

const userInput = prompt("Please enter a number from 1 - 100");

if (userInput < 1) {
    alert("Please enter a bigger number!");
} else if (userInput > 100) {
    alert("Please enter a smaller number!");
} else {
    alert("That number was just right!");
    alert("Your number was " + userInput)
}


// if (userInput % 2 == 0) {
//     alert("Was even!");
// } else if (userInput < 50) {
//     alert("Smaller than 50");
// }

if (userInput < 1 || userInput > 100) {
    alert("That was not between 1 and 100!");
} else {
    alert("That number was just right!");
    alert("Your number was " + userInput);
}

if (userInput % 2 == 0 || userInput < 50) {
    alert("Number is even OR less than 50!");
}

if (userInput % 2 == 0 && userInput < 50) {
    alert("Number is even AND less than 50!");
}

