function eatThePizza() {
    document.getElementById("pizzaParagraph").textContent = "";
}

function checkPassword() {
    if (document.getElementById("pwdInput").value === "open sesame") {
        alert("Correct password!");
    } else {
        alert("Incorrect password.");
    }
}

function toggleDark() {
    if (document.body.className != "dark") {
        document.body.className = "dark";
    } else {
        document.body.className = "";
    }
}

function calcExpenses() {
    let total = 0;

    total = total + parseInt(document.getElementById("expense1").value);
    total = total + parseInt(document.getElementById("expense2").value);
    total = total + parseInt(document.getElementById("expense3").value);

    document.getElementById("expenseOutput").value = total;
}