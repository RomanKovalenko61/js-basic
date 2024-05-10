function convertSum(sum, from, to) {
    return ((sum * from) / to).toFixed(2);
}

function getTargetCurrencyIcon(targetCurrency) {
    switch (targetCurrency) {
        case "RUB":
            return "руб";
        case "EUR":
            return "€";
        case "USD":
            return "$";
        default:
            return "";
    }
}

function messageTemplate(value, icon) {
    return `${value} ${icon}`;
}

function converter(sum, currency, targetCurrency) {
    const ALLOW_CURRENCY_LIST = ["RUB", "EUR", "USD"];
    const USD = 91.33;
    const RUB = 1;
    const EUR = 112.33;

    currency = currency.toUpperCase();
    targetCurrency = targetCurrency.toUpperCase();
    const icon = getTargetCurrencyIcon(targetCurrency);

    if (currency === targetCurrency) {
        console.log("Входящая и исходящая валюта одинаковы");
        return messageTemplate(sum, icon);
    }
    if (!ALLOW_CURRENCY_LIST.includes(currency)) {
        console.log("Входящая валюта мне неизвестна");
        return null;
    }
    if (!ALLOW_CURRENCY_LIST.includes(targetCurrency)) {
        console.log("Исходящая валюта мне неизвестна");
        return null;
    }

    let value = null;

    switch (currency) {
        case "USD":
            switch (targetCurrency) {
                case "RUB":
                    value = convertSum(sum, USD, RUB);
                    break;
                case "EUR":
                    value = convertSum(sum, USD, EUR);
                    break;
            }
            break;
        case "RUB":
            switch (targetCurrency) {
                case "USD":
                    value = convertSum(sum, RUB, USD);
                    break;
                case "EUR":
                    value = convertSum(sum, RUB, EUR);
                    break;
            }
            break;
        case "EUR":
            switch (targetCurrency) {
                case "RUB":
                    value = convertSum(sum, EUR, RUB);
                    break;
                case "USD":
                    value = convertSum(sum, EUR, USD);
                    break;
            }
            break;
    }

    return messageTemplate(value, icon);
}

console.log(`1000 рублей в доллары ${converter(1000, "RUB", "USD")}`);
console.log(`1000 долларов в рубли ${converter(1000, "USD", "RUB")}`);
console.log(`1000 рублей в евро ${converter(1000, "RUB", "EUR")}`);
console.log(`1000 евро в рубли ${converter(1000, "EUR", "RUB")}`);
console.log(`1000 евро в доллары ${converter(1000, "EUR", "USD")}`);
console.log(`1000 долларов в евро ${converter(1000, "USD", "EUR")}`);

console.log(`1000 рублей в йены ${converter(1000, "RUB", "YEN")}`);
console.log(`1000 рублей в рубли ${converter(1000, "RUB", "RUB")}`);
