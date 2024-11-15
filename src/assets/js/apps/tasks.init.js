function todoApp() {
    return {
        todayTasks: [
            { text: 'Define Data Requirements', completed: true, editing: false },
            { text: 'Identify Data Sources', completed: false, editing: false },
            { text: 'Setup Initial Infrastructure', completed: false, editing: false }
        ],
        yesterdayTasks: [
            { text: 'Initial Data Cleaning', completed: false, editing: false },
            { text: 'Data Profiling', completed: false, editing: false },
            { text: 'Data Transformation', completed: false, editing: false }
        ],
        newTask: '',

        addTask() {
            if (this.newTask.trim() === '') return;
            this.todayTasks.push({ text: this.newTask, completed: false, editing: false });
            this.newTask = '';
        },

        enableEditing(task) {
            task.editing = true;
        },

        disableEditing(task) {
            task.editing = false;
        },

        deleteTask(task) {
            if (this.todayTasks.includes(task)) {
                this.todayTasks = this.todayTasks.filter(t => t !== task);
            } else if (this.yesterdayTasks.includes(task)) {
                this.yesterdayTasks = this.yesterdayTasks.filter(t => t !== task);
            }
        }
    };
}
