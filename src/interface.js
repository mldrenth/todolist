import Task from './task.js'
import Project from './project.js'
import {projectList, currentProject,setCurrentProject, getCurrentProject, getProjectList, removeTask} from './interaction.js'

export const projectDiv = document.querySelector("#project-div");
export const taskListDiv = document.querySelector("#task-list-div")
export const addTaskButton = document.querySelector("#add-task");
export const newTaskForm = document.querySelector("#new-task-form")
export const submitButton = document.querySelector("#submit-button")
const  projectSubmitButton = document.querySelector("#project-submit-button")
const addNewProjectButton = document.querySelector("#add-new-project-button")
const newProjectForm = document.querySelector("#new-project-form")
const projectButtons = document.querySelector("#project-buttons")
const projectNameHeadline = document.querySelector("#project-name");


let newTask
let newProject


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
        taskDiv.style.width = "50vw"
        taskDiv.style.display = "flex"
        taskDiv.style.flexDirection = "row"
        taskDiv.style.justifyContent = "space-between"

        const taskNameDiv = document.createElement('div')
        taskNameDiv.textContent = task.title;
        taskDiv.appendChild(taskNameDiv);

        const taskDescriptionDiv = document.createElement('div')
        taskDescriptionDiv.textContent = task.description;
        taskDiv.appendChild(taskDescriptionDiv);

        const taskDueDateDiv = document.createElement('div')
        taskDueDateDiv.textContent = task.dueDate;
        taskDiv.appendChild(taskDueDateDiv);

        const taskPriorityDiv = document.createElement('div')
        taskPriorityDiv.textContent = task.priority;
        taskDiv.appendChild(taskPriorityDiv);

        const taskDeleteButton = document.createElement('button')
        taskDeleteButton.innerHTML = "Delete Task"
        taskDeleteButton.addEventListener("click", function() {
            currentProject.removeTask(task),
            clearDisplay(taskListDiv),
            getCurrentProject(),
            renderTasks(currentProject)

        })
        taskDiv.appendChild(taskDeleteButton)

        taskListDiv.appendChild(taskDiv);
    })

    projectNameHeadline.innerHTML = currentProject.projectName
}

export const renderProjects = (projectList) => {
    const currentProjectList = getProjectList();

    currentProjectList.forEach((project) => {
        const projectButton = document.createElement('button')
        projectButton.textContent = project.projectName;
        projectButton.addEventListener("click", function() {
            setCurrentProject(project.projectName),
            clearDisplay(taskListDiv),
            renderTasks(getCurrentProject())

        })
        projectButtons.appendChild(projectButton);
    })
}

const clearDisplay = (div) => {
    while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
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

const createNewProject = () => {
    let newProjectTitle = document.querySelector("#project-input").value;

    newProject = new Project (newProjectTitle);
    console.log(newProject)

    return newProject
}

addTaskButton.addEventListener("click", openNewTaskForm)
addNewProjectButton.addEventListener("click", openNewProjectForm);
submitButton.addEventListener("click", function() {
    createNewTask(),
     getCurrentProject(),
      currentProject.addTask(newTask),
       clearDisplay(taskListDiv),
        renderTasks(currentProject),
         closeNewTaskForm()
})
projectSubmitButton.addEventListener("click", function(){
    createNewProject(),
    getProjectList(),
    projectList.push(newProject),
    clearDisplay(projectButtons),
    renderProjects(projectList),
    closeNewProjectForm(),
    console.log(getProjectList())
})
