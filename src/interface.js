import Task from './task.js'
import Project from './project.js'

export const projectDiv = document.querySelector("#project-div");
export const addTaskButton = document.querySelector("#add-task");
export const newTaskForm = document.querySelector("#new-task-form")


export const createNewTask = () => {
    newTaskForm.style.display = "block"

}


export const renderTasks = (currentProject) => {
    
    const toDoList = currentProject.getTaskList()

    toDoList.forEach((task) => {
        const taskDiv = document.createElement('div')
        taskDiv.textContent = task;
        projectDiv.appendChild(taskDiv);
    })
}
addTaskButton.addEventListener("click", createNewTask)