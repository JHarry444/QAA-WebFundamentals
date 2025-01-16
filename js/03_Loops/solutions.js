//  Ex. 5
// const correctPassword = "open sesame";

// let userInput = prompt("Please enter the password:");

// while (userInput != correctPassword) {
//     userInput = prompt("Incorrect password. Please try again:");
// }


// alert("Correct!");

// Ex 6a.
for (let num = 1; num <= 10; num = num + 1) {
    debugger;
    // long version of line 23 to show concatentation
    let output = "";
    output = output + "<p>";
    output = output + num;
    output = output + "</p>";
    document.write(output);

    // document.write("<p>" + num + "</p>");

    document.write(`<p>${num}</p>`);
}