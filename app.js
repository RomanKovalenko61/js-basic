const user = {
    name: "Вася",
    age: 40,
    city: "Moskow",
};
const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
    skills: ["Разработка", "Дизайн"],
    creditCard: "2342-2345-2734-2356",
};
user.test = "sdfs";

// user.skills = additionalData.skills;
// user.creditCard = additionalData.creditCard;

// user = {
//     ...user,
//     ...additionalData,
// };
console.log(user);
