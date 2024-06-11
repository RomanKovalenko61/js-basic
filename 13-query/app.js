const obj = {
    search: "Вася",
    take: 10,
};

function createQuery(obj) {
    let query = "";
    const arr = Object.keys(obj);
    for (let i = 0; i < arr.length; i++) {
        query += arr[i] + "=" + obj[arr[i]];
        if (i != arr.length - 1) {
            query += "&";
        }
    }
    return query;
}

function createQueryAlt(obj) {
    let query = "";
    for (const key of Object.keys(obj)) {
        query += key + "=" + obj[key] + "&";
    }
    return query.slice(0, -1);
}

const createQueryLambda = (params) =>
    Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
console.log(createQueryLambda(obj));

console.log(createQuery(obj));
console.log(createQueryAlt(obj));
