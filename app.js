/*
    Задача вывести в консоль строку "Я люблю JS !" тз массива,
    проходя циклом в обратном порядке, не используя метод reverse/
    const arr = ['!', 'JS', 'люблю', 'Я'];
*/

const arr = ['!', 'JS', 'люблю', 'Я'];

const reverseArr = [];
for(let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
}
console.log(reverseArr.join(' '));

console.log(arr.reverse().join(' '));