// 'RUB', 'USD', 'EUR'

function converter(sum, cur1, cur2) {
    const rateRUBtoUSD = 90;
    const rateRUBtoEUR = 100;
    const rateUSDtoRUB = 0.011;
    const rateUSDtoEUR = 1.07;
    const rateEURtoUSD = 0.935;
    const rateEURtoRUB = 0.01;

    cur1 = cur1.toLowerCase();
    cur2 = cur2.toLowerCase();

    switch (true) {
        case cur1 === "rub" && cur2 === "usd":
            return sum / rateRUBtoUSD;
        case cur1 === "rub" && cur2 === "eur":
            return sum / rateRUBtoEUR;
        case cur1 === "usd" && cur2 === "rub":
            return sum / rateUSDtoRUB;
        case cur1 === "usd" && cur2 === "eur":
            return sum / rateUSDtoEUR;
        case cur1 === "eur" && cur2 === "rub":
            return sum / rateEURtoRUB;
        case cur1 === "eur" && cur2 === "usd":
            return sum / rateEURtoUSD;
        default:
            return null;
    }
}

console.log(`1000 рублей в доллары ${converter(1000, "RUB", "USD")}`);
console.log(`1000 долларов в рубли ${converter(1000, "USD", "RUB")}`);
console.log(`1000 рублей в евро ${converter(1000, "RUB", "EUR")}`);
console.log(`1000 евро в рубли ${converter(1000, "EUR", "RUB")}`);
console.log(`1000 евро в доллары ${converter(1000, "EUR", "USD")}`);
console.log(`1000 долларов в евро ${converter(1000, "USD", "EUR")}`);

console.log(`1000 рублей в йены ${converter(1000, "USD", "YEN")}`);
