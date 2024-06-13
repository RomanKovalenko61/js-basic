"use strict";

localStorage.setItem("token", "asdsafafa");
localStorage.setItem("token1", 4);
localStorage.setItem("token2", true);

const token2 = localStorage.getItem("token2");
console.log(typeof token2);

localStorage.removeItem("token2");
localStorage.clear();
