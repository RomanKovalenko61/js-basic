/*
    Методом prompt получите ответ пользователя 
    на вопрос "Сколько будет 7 + или - 15?". 
    Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", 
    а если он введёт "Я не робот", то тоже "Успех".
*/

const q = prompt('Сколько будет 7 + или - 15?');

/*
switch (true) {
    case q === 'Я не робот':
    case Number(q) === 22:
    case Number(q) === -8:
        console.log('Успех');
        break;
    default:
         console.log('Вы робот!');
}
*/

if (q === 'Я не робот') {
    console.log('Успех');
} else {
    const num = Number(q);
    switch (num) {
        case 22:
        case -8:
            console.log('Успех'); 
            break;
        default:
            console.log('Вы робот!');
    }
}