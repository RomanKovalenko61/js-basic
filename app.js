"use strict";

console.log(document.querySelector(".one").innerText);

console.log(document.querySelectorAll(".one")[0].innerText);
console.log(document.querySelectorAll(".one")[1].innerText);

console.log(document.getElementsByClassName("one"));

console.log(document.querySelector(".one + .one").innerText);
console.log(document.querySelector(".one ~ div").innerText);

console.log(document.querySelector("#two").innerText);
console.log(document.getElementById("two").innerText);

console.log(document.querySelector("[user-id='4']").innerText);
