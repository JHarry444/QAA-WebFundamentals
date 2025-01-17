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