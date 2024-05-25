/*
    Реализовать методы увеличения и уменьшения баланса,
    при котором каждая операция сохраняется в массив
    operations в виде { reason: 'Оплата налогов', sum: -100}.
    Возвращается true, если успешно и false, если не хватает баланса.
    Также реализовать метод вывода числа операций по кошельку.
*/

const wallet = {
    balance: 0,
    operations: [],
    increase: function (sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason: reason,
            sum: sum,
        });
        return true;
    },
    decrease: function (sum, reason) {
        if (this.balance < sum) {
            console.log("Недостаточно баланса");
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason: reason,
            sum: -sum,
        });
        return true;
    },
    getOperationLength: function () {
        return this.operations.length;
    },
};

console.log(wallet.increase(1000, "Зарплата"));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(2000, "Покупка ноутбука"));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(500, "Покупка телефон"));
console.log(wallet.getOperationLength());
console.log(wallet.balance);
console.log(wallet.operations);
