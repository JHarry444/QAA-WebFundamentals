
// Ex 3.

let score = 0;


const answer1 = prompt("What is the capital of Australia?");

if (answer1 == "Canberra" || answer1 == "canberra") {
    score = score + 1;
}

const answer2 = prompt("Which language has the most native speakers?");

if (answer2.toLowerCase() == "spanish") {
    score = score + 1;
}

const answer3 = prompt("What is the most common surname in the US?");

if (answer3 == "Smith") {
    score = score + 1;
}


alert("You got " + score + " of 3 answers correct!");