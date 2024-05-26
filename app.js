/* 
    Сделать объект склад с методами добавления на склад, поиска 
    по складу товара и расчет веса
*/

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return (existGood = this.goods.find((g) => g.id === id));
    },
    addGood: function (good) {
        const existGood = this.findGoodById(good.id);
        if (existGood) {
            console.log("Этот товар уже есть на складе");
            return;
        }
        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce(
            (acc, current) =>
                (acc += current.weight?.kg ? current.weight.kg : 0),
            0
        );
    },
};

/* Товары */
const car = {
    id: 1,
    weight: {
        kg: 1000,
    },
    brand: "Ford",
};

const chair = {
    id: 2,
    weight: {
        kg: 2,
    },
};

const paper = {
    id: 3,
    color: "red",
};

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);

console.log(warehouse.goods);
console.log(warehouse.findGoodById(6));
console.log(warehouse.findGoodById(1));
console.log(warehouse.findGoodById(2));
console.log(warehouse.findGoodById(3));
console.log(warehouse.getWeightKg());
