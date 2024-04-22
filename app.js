const userData = ['Антон', 18, 'Москва'];

function getData() {
    return ['Антон', 18, 'Москва'];
}

// const userName = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

//const [userName, age, city] = userData;
const [userName, _, city] = getData();

console.log(userName, city);