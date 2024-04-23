// const language = prompt('Введите символы языка. Например ru ua en de pl');

const language = navigator.language;
console.log(language);

switch (true) {
    case language.includes('ru'):
        console.log('Привет');
        break;
    case language.includes('uk'):
        console.log('Доброго ранку');
        break;
    case language.includes('en'):
        console.log('Hello');
        break;
    case language.includes('de'):
        console.log('Gutten tag');
        break;
    case language.includes('pl'):
        console.log('Cześć');
        break;
    default:
        console.log('Unknown language!');
}