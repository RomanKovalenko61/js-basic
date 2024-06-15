"use strict";

let operator;

function submitForm() {
    let num1 = Number(document.getElementById("num1").value.replace(",", "."));
    let num2 = Number(document.getElementById("num2").value.replace(",", "."));
    if (!num1 || !num2 || !operator) {
        return;
    }
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    document.querySelector(
        ".notification"
    ).innerText = `${num1}${operator}${num2}=${result}`;
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    document
        .querySelector(".notification")
        .classList.remove("notification_hidden");
}

function inputChanged(e) {
    if (e.code == "Enter") {
        submitForm();
    }
}
