// Extension

// 1.

function addDigits(num) {
    const tens = Math.floor(num / 10);
    const units = num % 10;

    return tens + units;
}

// 2. 

function convertToNumber(num) {
    const awkward = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tensArray = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const unitsArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    const tens = Math.floor(num / 10);
    const units = num % 10;

    let output = "";
    if (num > 10 && num < 20) {
        output = awkward[num - 11];
    } else {
        output = output + tensArray[tens];
        if (tens >= 2 && units > 0) {
            output = output + "-";
        }
        output = output + unitsArray[units];
    }
    return output;
}

for (let i = 1; i < 100; i = i + 1) {
    console.log(convertToNumber(i));
}