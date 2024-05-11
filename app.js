/* Вытащить имя и фамилию в отдельные переменные */
const fullUserName = "Вася aka Terminator Perfinator Пупкин";

const userName = fullUserName.slice(0, fullUserName.indexOf(" "));
console.log(userName);
const surName = fullUserName.slice(
    fullUserName.lastIndexOf(" ") + 1,
    fullUserName.length
);
console.log(surName);
