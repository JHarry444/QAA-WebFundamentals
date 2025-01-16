// Ex 1.

function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(25, 12);
alert(sum);

//  Ex 2.

function whichNumberIsBigger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let result = whichNumberIsBigger(10, -2);
alert(result);

//  Ex 3.

function coinFlip() {
    const rand = Math.random();
    if (rand < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}

for (let i = 0; i < 10; i = i + 1) {
    console.log(coinFlip());
}

// Ex 4.

function isPasswordLongEnough(password) {
    // if (password.length >= 8) {
    //     return true;
    // } else {
    //     return false;
    // }
    return password.length >= 8;
}

console.log(isPasswordLongEnough("abc"));
console.log(isPasswordLongEnough("122345678"));
