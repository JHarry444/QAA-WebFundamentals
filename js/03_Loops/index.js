let num = 0;
while (num < 10) {
    console.log("Hello " + num);
    num = num + 1;
}

// debugger;
let userInput = parseInt(prompt("Gimme a number from 1 - 10"));

while (isNaN(userInput) || userInput < 1 || userInput > 10) {
    alert("Invalid number!")
    userInput = parseInt(prompt("Gimme a number from 1 - 10"));
}

let number = 5;

while (number != 5) {
    console.log("while loop");
}

do {
    console.log("do while loop");
} while (number != 5);

for (let i = 0; i < 10; i = i + 1) {
    console.log(i);

}