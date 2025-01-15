// comments are not executed by the browser - purely for documentation
// ctrl + / 
// alert("STOP RIGHT THERE");  // Displays a popup - pauses the page until it is closed
console.log("Hello, World!"); //prints to the console
// JS executed top - to - bottom
// most scripting languages are like this (hence 'script')
console.log(1);
console.log(2);
console.log(3);

// variables are the most fundamental part of programming
// how you store data
// container that holds a value

let num = 12;

// to give a variable a new value you MUST use the '=' sign
num = 27;

const pi = 3.142;
// pi = 9; const cannot be reassigned (so nothing using '=')

// old version of let (largely replaced now - don't use) 
var myName = "Jordan";

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 ** 3);
console.log(2 < 3);
console.log(2 <= 3);
console.log(2 > 3);
console.log(2 >= 3);
console.log(2 == 3);
console.log(2 != 3);

let myJob = "Trainer";
let mySpecialism = 'Software';

let jordanIsAMuppet = true;

// will 'concatenate' all the strings together
console.log("Jordan" + " " + "Harrison");
// Will return NaN (Not a Number) as you can't subtract strings
console.log("Jordan" - "Harrison");

const name = prompt("What's your name?");
const age = prompt("What's your age?");
const job = prompt("What's your job?");

console.log("Your name is " + name + " and you are a " + age + " years old " + job);
console.log("Your name is", name, "and you are a", age, "years old", job);
