// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     };
// }

const power = (pow) => (num) => num ** pow;
console.log(power(5)(2)); // Ожидаемый вывод: 32 (2^5 = 32)
