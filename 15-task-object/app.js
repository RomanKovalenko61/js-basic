"use strict";

const toDoList = {
    id: 10000,
    list: [],
    addTask: function (title, priority) {
        const id = this.id++;
        const task = {
            title,
            id,
            priority,
        };
        this.list.push(task);
    },
    findIndexToArray: function (id) {
        return this.list.findIndex((el) => el.id === id);
    },
    getTask: function (id) {
        const index = this.findIndexToArray(id);
        if (index != -1) {
            console.log(`Найден элемент с индексом ${index}`);
            return this.list[index];
        }
    },
    updateTask: function (id, title, priority) {
        const index = this.findIndexToArray(id);
        if (index != -1) {
            this.list[index] = { title, id, priority };
            console.log(`Обновлен элемент с индексом ${index}`);
        }
    },
    deleteTask: function (id) {
        const index = this.findIndexToArray(id);
        if (index != -1) {
            this.list.splice(index, 1);
            console.log(`Удален элемент с индексом ${index}`);
        }
    },
    getList: function () {
        return this.list;
    },
};

console.log(toDoList.getList());
toDoList.addTask("Помыть посуду", 1);
toDoList.addTask("Написать CRUD", 5);
console.log(toDoList.getList());
toDoList.updateTask(10000, "Помыть кота", 10);
console.log(toDoList.getTask(10001));
console.log(toDoList.getList());
