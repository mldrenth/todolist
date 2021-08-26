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
    removeTask(task) {
        const index = this.taskList.indexOf(task)
        return this.taskList.splice(index,1)
    }

    getTaskList() {
        return this.taskList;
    }
}