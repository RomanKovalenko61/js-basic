const arr = [2, 4, 4, 10, 20];

let elementGreatherThanFive;
for (const element of arr) {
    if (element > 5) {
        elementGreatherThanFive = element;
        break;
    }
}
// console.log(elementGreatherThanFive);

elementGreatherThanFive = arr.find((el) => el > 5);
elementGreatherThanFiveIndex = arr.findIndex((el) => el > 5);
console.log(elementGreatherThanFive);
console.log(elementGreatherThanFiveIndex);
