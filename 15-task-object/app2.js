/* ToDO провести анализ что как и почему работает именно так*/

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
    getTask: function (id) {
        return this.tasks.find(({ id: taskId }) => taskId === id);
    },

    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return this;
    },

    updateTask(id, data) {
        // data = {title: 'Новое название, priority: 22}
        const task = this.getTask(id);
        if (!task) {
            return this;
        }
        // task = {id: 4, title: 'Я заголовок', proirity: 4}
        Object.assign(task, data);
        // task = {id: 4, title: 'Новое название', proirity: 22}
        return this;
    },
    getList: function () {
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
        return this;
    },
    getSortedListById: function (desc = false) {
        this.tasks.sort(({ id: a }, { id: b }) => (desc ? b - a : a - b));
        return this;
    },
    getSortedListByPriority: function (desc = false) {
        this.tasks.sort(({ priority: a }, { priority: b }) =>
            desc ? b - a : a - b
        );
        return this;
    },
};

const data1 = { title: "Данные номер 1", priority: 5 },
    data2 = { title: "Данные номер 2", priority: 2 },
    data3 = { title: "Данные номер 3", priority: 7 },
    data4 = { title: "Данные номер 4", priority: 4 },
    data5 = { title: "Данные номер 5", priority: 11 };

ToDoList.addTask(data1)
    .addTask(data2)
    .addTask(data3)
    .addTask(data4)
    .addTask(data5)
    .deleteTask(10003)
    .updateTask(10004, { title: "Новое название", priority: 22 })
    .getSortedList("priority", true);

console.log(ToDoList.tasks);
