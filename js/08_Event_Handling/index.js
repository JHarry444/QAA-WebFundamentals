const newParaInput = document.getElementById("newParaInput");

function addParagraph() {
    const newP = document.createElement("p");
    newP.textContent = newParaInput.value;
    newParaInput.value = "";
    newParaInput.focus();
    document.body.appendChild(newP);
}

// const demoInput = document.getElementById("demoInput");


function logTyping(event) {
    console.log("Event:", event);
    console.log("Value:", event.target.value);

    // console.log("Value:", demoInput.value);
}

const counterInput = document.getElementById("counterInput");

function incrementCounter() {
    counterInput.value = parseInt(counterInput.value) + 1;
    // .value is a string so if you use + you'll end up appending 1 to the end of the value
    // rather than increasing it
}

const fancyCounterInput = document.getElementById("fancyCounterInput");
function changeCounter(change) {
    if (change === 'R') {
        fancyCounterInput.value = 0;
    } else {
        fancyCounterInput.value = parseInt(fancyCounterInput.value) + change;
    }
}