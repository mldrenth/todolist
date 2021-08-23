export default class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.taskList = [];
    }

    setProjectName(projectName) {
        this.projectName = projectName;
    }

    getProjectName() {
        return this.projectName;
    }

    addTask(task) {
        return this.taskList.push(task);
    }

    getTaskList() {
        return this.taskList;
    }
}