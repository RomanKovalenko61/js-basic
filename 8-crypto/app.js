const someWord = "password";

function crypto(str) {
    const arr = str.split("");
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] && arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return arr.join("");
}

function check(cryptedWord, checkWord) {
    if (!cryptedWord || !checkWord) {
        return false;
    }
    return checkWord === crypto(cryptedWord) ? true : false;
}

const crypted = crypto(someWord);
console.log("Слово зашифровано - " + crypted);
console.log(`Проверка сопадения с исходным словом ${check(crypted, someWord)}`);
