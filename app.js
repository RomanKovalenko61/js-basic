const user = {
    name: "Vasya",
    surname: "Pupkin",
    age: 24,
    skills: ["Programming", "Cooking"],
    eduBasic: "School 10",
    eduPro: "MFTI",
};

console.log(user);
console.log(user.name);
console.log(user.skills[0]);

console.log(user["skills"]);

const level = "Pro";
console.log(user["edu" + level]);

// const res = prompt("Введите свойство");
// console.log(user[res]);

user["city"] = "Москва";
console.log(user);

user.age = 30;
user["age"] = 40;
console.log(user);
