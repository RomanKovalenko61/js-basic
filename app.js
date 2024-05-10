/*
    Найти среднее значение последоватедьности 
    чисел с помощью reduce
*/

const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, element, i) => {
    if (i === arr.length - 1) {
        return (acc + element) / arr.length;
    } else {
        return acc + element;
    }
}, 0);
console.log(avg);
