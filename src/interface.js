import Task from './task.js'
import Project from './project.js'
import {projectList, currentProject, getCurrentProject} from './interaction.js'

export const projectDiv = document.querySelector("#project-div");
export const taskListDiv = document.querySelector("#task-list-div")
export const addTaskButton = document.querySelector("#add-task");
export const newTaskForm = document.querySelector("#new-task-form")
export const submitButton = document.querySelector("#submit-button")
const  projectSubmitButton = document.querySelector("#project-submit-button")
const addNewProjectButton = document.querySelector("#add-new-project-button")
const newProjectForm = document.querySelector("#new-project-form")

let newTask


export const openNewTaskForm = () => {
    newTaskForm.style.display = "block"
}

const closeNewTaskForm = () => {
    newTaskForm.style.display = "none"
}

const openNewProjectForm = () => {
    newProjectForm.style.display = "block"
}

const closeNewProjectForm = () => {
    newProjectForm.style.display = "none"
}


export const renderTasks = (currentProject) => {
    
    const toDoList = currentProject.getTaskList()

    toDoList.forEach((task) => {
        const taskDiv = document.createElement('div')
        taskDiv.textContent = task.title;
        taskListDiv.appendChild(taskDiv);
    })
}

export const renderProjects = (projectList) => {
    
}

const clearDisplay = () => {
    while (taskListDiv.hasChildNodes()) {
    taskListDiv.removeChild(taskListDiv.firstChild);
    }
}

const createNewTask = () => {
    let newTaskTitle = document.querySelector("#title-input").value;
    let newTaskDescription = document.querySelector("#description-input").value;
    let newDueDate = document.querySelector("#dueDate-input").value;
    let newPriority = document.querySelector("#priority-input").value;

    newTask = new Task (newTaskTitle, newTaskDescription, newDueDate, newPriority);
    console.log(newTask)
    

    return newTask
}

addTaskButton.addEventListener("click", openNewTaskForm)
addNewProjectButton.addEventListener("click", openNewProjectForm);
submitButton.addEventListener("click", function() {
    createNewTask(),
     getCurrentProject(),
      currentProject.addTask(newTask),
       clearDisplay(),
        renderTasks(currentProject),
         closeNewTaskForm()
})
