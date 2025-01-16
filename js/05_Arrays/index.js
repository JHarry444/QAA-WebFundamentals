const myArray = ["Jordan", "Cameron", "Piers"];

console.log("1st element:", myArray[0]);
console.log("2nd element:", myArray[1]);
console.log("3rd element:", myArray[2]);

myArray[2] = "Liam";

console.log("3rd element:", myArray[2]);

myArray[3] = "Peter";

console.log("4th element:", myArray[3]);

function writeTrainer(trainer) {
    document.write(`<p>${trainer}</p>`);
}

// const t1 = "Jordan";
// const t2 = "Cameron";
// const t3 = "Liam";
// const t4 = "Peter";

// writeTrainer(t1);
// writeTrainer(t2);
// writeTrainer(t3);
// writeTrainer(t4);

const trainers = ["Jordan", "Cameron", "Liam", "Peter", "Morgan", "JB"];

// writeTrainer(trainers[0]);
// writeTrainer(trainers[1]);
// writeTrainer(trainers[2]);
// writeTrainer(trainers[3]);

for (let i = 0; i < trainers.length; i = i + 1) {
    writeTrainer(trainers[i]);
}


const arrayOfThings = [123, "Hello", true];