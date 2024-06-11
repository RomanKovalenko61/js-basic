"use strict";

const audi = {
    make: "Audi",
    model: "A3",
    damages: [],
};

const carManipulation = {
    addDamage(part, rate) {
        this.damages.push({
            part,
            rate,
        });
        console.log(`Добавить повреждение на ${this.make} ${this.model}`);
    },
};

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi("Крыло", 3);
console.log(audi);

const addDamageAudiFoof = carManipulation.addDamage.bind(audi, "Крыша");
addDamageAudiFoof(5);
addDamageAudiFoof(3);
console.log(audi);
