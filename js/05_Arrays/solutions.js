// 💡 
// Create an array that will hold 10 integer values, populate the array with values, 
// then call and output each element.

const nums = [];

nums[0] = 21;
nums[1] = 123;
nums[2] = 23;
nums[3] = 43;
nums[4] = 25;
nums[5] = 453;
nums[6] = 24;
nums[7] = 563;
nums[8] = 64;
nums[9] = 63;

console.log("Nums:", nums);


// Create a for loop that populates an integer array with values, outputting them at each iteration.

const nums2 = [];

for (let i = 0; i < 10; i = i + 1) {
    nums2[i] = Math.round(Math.random() * 10);
}

console.log("Nums2:", nums2);


// Then create another loop that iterates through the array, changing the values at each point 
// to equal itself times 10, outputting them at each iteration.

for (let i = 0; i < nums2.length; i = i + 1) {
    nums2[i] = nums2[i] * 10;

    console.log("I:", nums2[i]);

}

// const means you cant replace an array/object but you CAN change it


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