"use strict";

const ToDoList = {
    lastId: 10000,
    tasks: [],

    addTask(data) {
        if (!data) {
            return this;
        }

        data.id = ++this.lastId;
        this.tasks = [...this.tasks, data];
        return this;
    },
    getTask(id) {
        return this.tasks.find(({ id: taskId }) => taskId === id);
    },
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return this;
    },
    updateTask(id, data) {
        const task = this.getTask(id);
        if (!task) {
            return this;
        }
        Object.assign(task, data);
        return this;
    },
    getList() {
        return this.tasks;
    },
    getSortedList: function (sortedBy, desc = false) {
        const ALLOW_SORT_PARAMS = ["id", "priority"];

        if (!ALLOW_SORT_PARAMS.includes(sortedBy)) {
            sortedBy = "id";
        }

        this.tasks.sort(({ [sortedBy]: a }, { [sortedBy]: b }) =>
            desc ? b - a : a - b
        );
        return this.tasks;
    },
    getSortedListById: function (desc = false) {
        this.tasks.sort(({ id: a }, { id: b }) => (desc ? b - a : a - b));
        return this.tasks;
    },
    getSortedListByPriority: function (desc = false) {
        this.tasks.sort(({ priority: a }, { priority: b }) =>
            desc ? b - a : a - b
        );
        return this.tasks;
    },
};

const newTask = {
    lastId: 10000,
    tasks: [
        {
            name: "тест",
            description: "описание",
            order: 0,
            id: 1,
        },
    ],
    getSortedList(sortedBy, desc = false) {
        const ALLOW_SORT_PARAMS = ["id", "description", "order"];
        if (!ALLOW_SORT_PARAMS.includes(sortedBy)) {
            console.log(
                `Передан неверный параметр для сортировки! Свойство ${sortedBy} не существует`
            );
            return this;
        }
        this.tasks.sort(({ [sortedBy]: a }, { [sortedBy]: b }) =>
            desc ? b - a : a - b
        );
        return this.tasks;
    },
};

newTask.getTask = ToDoList.getTask;

const addTask = ToDoList.addTask.bind(newTask);
const deleteTask = ToDoList.deleteTask.bind(newTask);
const updateTask = ToDoList.updateTask.bind(newTask);
const getList = ToDoList.getList.bind(newTask);
const getSortedListById = ToDoList.getSortedListById.bind(newTask);

const data1 = { name: "Имя 1", description: "Описание задачи 1", order: 10 },
    data2 = { name: "Имя 2", description: "Описание задачи 2", order: 8 },
    data3 = { name: "Имя 3", description: "Описание задачи 3", order: 3 },
    data4 = { name: "Имя 4", description: "Описание задачи 4", order: 5 },
    data5 = { name: "Имя 5", description: "Описание задачи 5", order: 1 };

addTask(data1);
addTask(data2);
addTask(data3);
addTask(data4);
addTask(data5);
deleteTask(10003);
updateTask(10004, { name: "Новое название", order: 22 });

console.log(newTask);
console.log(getSortedListById(true));

console.log(newTask.getSortedList("priority"));
console.log(newTask.getSortedList("order"));
