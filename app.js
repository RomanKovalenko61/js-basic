/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000];
    а также начальный баланс в 100$
    Необходимо сделать функции расчета:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной операции
        баланс < 0, то выдавать false)
    - Расчета среднего расхода и среднего дохода
*/
const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    for(const element of arrayOfOperations) {
        balance += element;
    }
    return balance;
}

function checkOperations(arrayOfOperations, startingBalance) {
    let balance = startingBalance;
    let isPositive = true;
    for(const element of arrayOfOperations) {
        balance += element;
        if (balance < 0) {
            isPositive = false;
            return isPositive;
        }
    }
    return isPositive;
}

function averageOperations(arrayOfOperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;

    for (const element of arrayOfOperations) {
        if (element > 0) {
            positiveSum += element;
            positiveCount++;
        } if (element < 0) {
            negativeSum += element;
            negativeCount++;
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log('Итоговый баланс: ' + getBalance(operations, startingBalance));
console.log('Проверка на положительный баланс: ' + checkOperations(operations, startingBalance));

const result = averageOperations(operations);

console.log(`Средний доход: ${result[0]}`);
console.log(`Средний расход: ${result[1]}`);