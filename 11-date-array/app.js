const arr = [
    "10-02-2022",
    "тест",
    "11/12/2023",
    "41/12/2023",
    "29-02-2024",
    "29-02-2023",
    "29-02-2020",
    "30-02-2020",
    "02/29/1923",
    "02/29/1924",
    "05/31/44",
];
// ['10-02-2022', '12-11-2023']

//https://stackoverflow.com/questions/7388001/javascript-regex-to-validate-date-format
function validDate(str) {
    let dateReg = /^\d{2}([./-])\d{2}\1\d{2,4}$/;
    if (str.match(dateReg)) {
        let day, month, year;
        switch (true) {
            case str.includes("-"):
                [day, month, year] = str.split("-");
                break;
            case str.includes("/"):
                [month, day, year] = str.split("/");
                break;
            default:
                console.log("something is wrong");
        }
        return checkDateRange(day, month, year);
    } else {
        return false;
    }
}

function checkDateRange(day, month, year) {
    const numberOfMonth = parseInt(month);
    if (month < 1 || month > 12) {
        return false;
    }

    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const isLeapYear = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

    let maxDayInMonth;
    if (isLeapYear && numberOfMonth === 2) {
        maxDayInMonth = 29;
    } else {
        maxDayInMonth = daysInMonth[numberOfMonth];
    }

    return day >= 1 && day <= maxDayInMonth;
}

function formatDate(str) {
    if (str.includes("/")) {
        const arr = str.split("/");
        [arr[0], arr[1]] = [arr[1], arr[0]];
        return arr.join("-");
    }
    return str;
}

console.log(
    arr.filter((item) => validDate(item)).map((item) => formatDate(item))
);
