/* преобразовать пользователей до вида 
    { fullName: 'Вася Пупкин', skillNum: 2}
*/

const users = [
    {
        name: "Вася",
        surname: "Пупкин",
        age: 30,
        skills: ["Программирование", "DevOps"],
    },
    {
        name: "Катя",
        surname: "Белова",
        age: 18,
        skills: ["Дизайн"],
    },
];

console.log(
    users.map((obj) => {
        return {
            fullName: `${obj.name} ${obj.surname}`,
            skillNum: obj.skills.length,
        };
    })
);
