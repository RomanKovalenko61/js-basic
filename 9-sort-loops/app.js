const arr = [1, 40, -5, 10, 0];

console.log("Первоначальный массив " + arr);
console.log("Отсортированный по возрастанию " + sortArrayInAscending(arr));
console.log("Первоначальный массив " + arr);
console.log("Отсортированный по убыванию " + sortArrayInAscending(arr, 1));
console.log("Первоначальный массив " + arr);

function orderTemplate(firstNumber, secondNumber, desc) {
    if (!desc) {
        return firstNumber > secondNumber;
    }
    return firstNumber < secondNumber;
}

function sortArrayInAscending(arr, desc = false) {
    const array = arr.slice(0);
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const isExchange = orderTemplate(array[i], array[j], desc);
            if (isExchange) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}
