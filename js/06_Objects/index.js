const trainers = ["Jordan", "Cameron", "Piers"];


const me = {
    name: "Jordan",
    age: 30,
    specialisms: ["Software", "Testing", "Being a Muppet"]
}

// access the 'attributes' the same way as you do elements in an array
console.log("Name:", me['name']);
console.log("Age:", me['age']);
console.log("Specialism:", me['specialism']);
// OR there's a shortcut (more commonly used)
console.log("Name:", me.name);
console.log("Age:", me.age);
console.log("Specialism:", me.specialism);

// set 'attributes' in a similar way to arrays
me['age'] = 31;
me.age = 31;

console.log("New age:", me.age);


const trainerObjects = [
    me,
    {
        name: "Cameron",
        age: 32,
        specialism: "Software"
    },
    {
        name: "Piers",
        age: 28,
        specialism: "DevOps"
    }
]