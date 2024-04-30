const arr = [1, 40, -5, 10, 0];

console.log("Первоначальный массив " + arr);
console.log("Отсортированный по возрастанию " + greedySort(arr, 0));
console.log("Отсортированный по убыванию " + greedySort(arr, 1));

function greedySort(sorted, isReverse) {
    for (let i = 0; i < sorted.length; i++) {
        let lastIndex = i;
        const curr = sorted[i];
        for (let j = i + 1; j < sorted.length; j++) {
            if (curr > sorted[j]) {
                sorted[lastIndex] = sorted[j];
                lastIndex = j;
                sorted[j] = curr;
            }
        }
    }
    if (isReverse) {
        const reverseSortedArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reverseSortedArr.push(sorted.pop());
        }
        return reverseSortedArr;
    }
    return arr;
}
