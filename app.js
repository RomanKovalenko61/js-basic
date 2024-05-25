/* отсортировать пользователей по возрасту */

const users = [
    { name: "Вася", age: 30 },
    { name: "Катя", age: 18 },
    { name: "Аня", age: 40 },
    { name: "Петя", age: 25 },
];
console.log(users.sort((o1, o2) => o1.age - o2.age));
