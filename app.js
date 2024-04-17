const bmvX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

/*
10 > 0 ? console.log('Больше 0') : console.log('Не больше');

if (10 > 0 ) {
    console.log('Больше 0');
} else {
    console.log('Не больше');
}

const str = 10 > 0 ? 'Больше 0' : 'Не больше';
console.log(str);

console.log(`Я хочу купить ${budget > bmvX3Price ? 'BMW' : 'Велосипед'}`);
*/

let message = budget > bmvX3Price 
    ? 'BMW' 
    : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

console.log(`Я хочу купить ${message}`);