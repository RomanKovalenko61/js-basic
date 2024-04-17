// Базовые арифметические операторы

const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2; 
const volume = 2 ** 3; // 2 * 2 * 2
console.log(volume); 


//Строки
const city = 'Москва'
const street = 'Новослободская';
console.log(city + ', ' + street + ' ' + 5);

//Операторы присваивания
let age = 18 + 5;

age += 2; // age = age + 2
age -= 3; // age = age - 3
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1

console.log(age);

//Операторы сравнения
const vasya = 20;

console.log(age > vasya);
console.log(age >= vasya);
console.log(age < vasya);
console.log(age <= vasya);
console.log(age == vasya);

//Порядок операторов
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

// 100 - (11) 10 > (9) 90 - (11) 5
// Приоритет операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

const a = (6 + 10) / 2;
console.log(a);

let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);