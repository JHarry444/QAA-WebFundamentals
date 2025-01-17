function createTrainer(event) {
    event.preventDefault();

    const data = {
        name: event.target.name.value,
        age: event.target.age.value,
        specialism: event.target.specialism.value
    };

    fetch("http://35.177.92.158:8081/trainers/createJSON", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(function () {
            console.log("SUCCESS!");
            renderTrainers();
        })
        .catch(err => console.error(err));
}

const output = document.getElementById("output");

function renderTrainers() {
    output.innerHTML = ""; // instantly removes all children of an element

    // fetch -> JS function for sending request
    fetch("http://35.177.92.158:8081/trainers/get") // GET request to my server
        .then(function (res) {
            return res.json(); // processes the response body into JSON data
        }).then(function (trainers) {
            for (let i = 0; i < trainers.length; i = i + 1) {
                const newTrainer = document.createElement("div");

                const trainerName = document.createElement("p");
                trainerName.textContent = `Name: ${trainers[i].name}`;
                newTrainer.appendChild(trainerName);

                const trainerAge = document.createElement("p");
                trainerAge.textContent = `Age: ${trainers[i].age}`;
                newTrainer.appendChild(trainerAge);

                const trainerSpecialism = document.createElement("p");
                trainerSpecialism.textContent = `Specialism: ${trainers[i].specialism}`;
                newTrainer.appendChild(trainerSpecialism);

                output.appendChild(newTrainer);
            }
        }).catch(function (err) {
            console.error(err); // logs any errors to the console

        })
}

renderTrainers(); // renders any exsisting trainers when the page loads