//https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0

function checkValidCardNumber(input) {
    if (!input.match(/^[0-9-]+$/)) {
        return false;
    }
    const numbers = input.replaceAll("-", "").split("").map(Number);
    for (let i = numbers.length - 2; i >= 0; i -= 2) {
        let double = numbers[i] * 2;
        numbers[i] = double > 9 ? double - 9 : double;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum % 10 === 0;
}

const cardNumber = "4561-2612-1234-5464";
const cardNumber2 = "4561-2612-1234-5467";

console.log(
    `${cardNumber} ${checkValidCardNumber(cardNumber) ? "valid" : "not valid"}`
);

console.log(
    `${cardNumber2} ${
        checkValidCardNumber(cardNumber2) ? "valid" : "not valid"
    }`
);
