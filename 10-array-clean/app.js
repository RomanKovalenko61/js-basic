const arr = [3, 6, 9, 2];
//const arr2 = arr.slice();

const isGreaterThanFive = (el) => (el > 5 ? true : false);

function filter(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(filter(arr, isGreaterThanFive));
//console.log(arr2.filter(isGreaterThanFive));
