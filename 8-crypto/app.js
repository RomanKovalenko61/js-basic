const someWord = "password";

function crypto(str) {
    const arr = str.split("");
    for (let i = 0; i < arr.length; i += 2) {
        const next = arr[i + 1];
        if (typeof temp !== undefined) {
            const temp = arr[i];
            arr[i] = next;
            arr[i + 1] = temp;
        }
    }
    return arr.join("");
}

function check(cryptedWord, checkWord) {
    return checkWord === crypto(cryptedWord) ? true : false;
}

function check2(cryptedWord, checkWord) {
    const crypArr = cryptedWord.split("");
    const checkArr = checkWord.split("");

    if (crypArr.length !== checkArr.length) {
        return false;
    }

    if (crypArr.length === 1) {
        return crypArr[0] === checkArr[0] ? true : false;
    }

    let isEqual = true;
    for (let i = 0; i < crypArr.length; i += 2) {
        const first = crypArr[i];
        const second = crypArr[i + 1];
        if (second === undefined) {
            isEqual = first === checkArr[i] ? true : false;
        } else {
            isEqual =
                first === checkArr[i + 1] && second === checkArr[i]
                    ? true
                    : false;
        }
        if (!isEqual) {
            return false;
        }
    }
    return true;
}

const crypted = crypto(someWord);
console.log("Слово зашифровано - " + crypted);
console.log(`Проверка сопадения с исходным словом ${check(crypted, someWord)}`);
console.log(
    `Проверка сопадения с исходным словом ${check2(crypted, someWord)}`
);
