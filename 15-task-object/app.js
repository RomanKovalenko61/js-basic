"use strict";

const toDoList = {
    id: 10000,
    list: [],
    addTask: function (title, priority) {
        const id = this.id++;
        this.list.push({ title, id, priority });
    },
    findIndexToArray: function (id) {
        return this.list.findIndex((el) => el.id === id);
    },
    getTask: function (id) {
        const index = this.findIndexToArray(id);
        if (index != -1) {
            return this.list[index];
        }
    },
    updateTask: function (id, title, priority) {
        const index = this.findIndexToArray(id);
        if (index != -1) {
            this.list[index] = { title, id, priority };
        }
    },
    deleteTask: function (id) {
        const index = this.findIndexToArray(id);
        if (index != -1) {
            this.list.splice(index, 1);
        }
    },
    getList: function () {
        return this.list;
    },
    getSortedListById: function (desk = false) {
        const arr = this.list.slice();
        if (desk) {
            return arr.sort((el1, el2) => el2.id - el1.id);
        } else {
            return arr.sort((el1, el2) => el1.id - el2.id);
        }
    },
    getSortedListByPriority: function (desk = false) {
        const arr = this.list.slice();
        if (desk) {
            return arr.sort((el1, el2) => el2.priority - el1.priority);
        } else {
            return arr.sort((el1, el2) => el1.priority - el2.priority);
        }
    },
};

console.log(toDoList.getList());
toDoList.addTask("Посмотреть смешные видосы", 2);
toDoList.addTask("Помыть посуду", 3);
toDoList.addTask("Написать CRUD", 12);
toDoList.addTask("Покормить кота", 10);
console.log(toDoList.getTask(10001));
console.log(toDoList.getTask(999));

// console.log(toDoList.getSortedListById());
// console.log(toDoList.getSortedListById(true));
// console.log(toDoList.getSortedListByPriority());
// console.log(toDoList.getSortedListByPriority(true));
