debugger;

const num1 = prompt("Please enter a number:");
const num2 = prompt("Please enter another number:");

// parseInt -> converts a string to a number
const sum = Number.parseInt(num1) + Number.parseInt(num2);

alert("The sum of your numbers is: " + sum);