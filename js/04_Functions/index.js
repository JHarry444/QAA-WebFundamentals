debugger;

function randomNumberLessThanTen() {
    let output = Math.random();
    output = output * 10;
    output = Math.floor(output);
    return output;
}

// const num1 = randomNumberLessThanTen();
// const num2 = randomNumberLessThanTen();


// const answer = prompt(`What is ${num1} x ${num2}?`);

// if (answer == num1 * num2) {
//     alert("Correct!")
// } else {
//     alert("Wrong!");
// }

// adds a <p> to the page
function writeParagraph(text) {
    document.write(`<p>${text}</p>`);
}

for (let num = 1; num <= 10; num = num + 1) {
    writeParagraph(num);
}

function introduction(name, age, job) {
    alert(`Your name is ${name} and you are a ${age} years old ${job}`);
}


// introduction("Jordan", 30, "Trainer");
// introduction("Cameron", 32, "Trainer");
// introduction("Piers", "Trainer");

let a = 12;
let b = 14;

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(25, 45));
console.log(addNumbers(345, 34));
console.log(addNumbers(23, 34));
