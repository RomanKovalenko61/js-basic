const str = "Вася Пупкина";
console.log(str.includes("а"));
console.log(str.startsWith("В"));
console.log(str.endsWith("н"));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace("В", "Ф"));
console.log(str.replace("П", "Д"));
console.log(str.replace("а", "и"));
console.log(str.replaceAll("а", "и")); // работает не во всех браузерах

console.log(str.replace(/а/g, "и")); //regexp

const str2 = " Вася    Пупкина  \n";
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());
