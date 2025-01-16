
// Ex 3.

// let score = 0;


// const answer1 = prompt("What is the capital of Australia?");

// if (answer1 == "Canberra" || answer1 == "canberra") {
//     score = score + 1;
// }

// const answer2 = prompt("Which language has the most native speakers?");

// if (answer2.toLowerCase() == "spanish") {
//     score = score + 1;
// }

// const answer3 = prompt("What is the most common surname in the US?");

// if (answer3 == "Smith") {
//     score = score + 1;
// }


// alert("You got " + score + " of 3 answers correct!");


// Ex 4.

// Math -> Contains useful functions? and constants when working with maths

// Math.PI -> constant value of PI

// for (let i = 0; i < 100; i++) {
//     let rand = Math.random() * 10;
//     console.log("Ceiling:", Math.ceil(rand));
//     console.log("Floor:", Math.floor(rand));
//     console.log("Round:", Math.round(rand));
// }

debugger;
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const answer = prompt("What is " + num1 + " x " + num2 + "?");

// const answer = prompt(`What is ${num1} x ${num2}?`);

if (answer == num1 * num2) {
    alert("Correct!")
} else {
    alert("Wrong!");
}