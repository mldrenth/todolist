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

        const taskEditButton = document.createElement('button');
        taskEditButton.innerHTML = "Edit Task";
        taskEditButton.addEventListener("click", function(){
            taskDiv.style.display = "none",
            createEditTaskForm(task,taskListDiv)
            
        })

        taskDiv.appendChild(taskEditButton);

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
const createEditTaskForm = (task,div) => {
    const editTaskForm = document.createElement('form')
    const editTaskTitleInput = document.createElement('input')
    const editTaskDescriptionInput = document.createElement('input')
    const editTaskDueDateInput = document.createElement("input")
    const editTaskPriorityInput = document.createElement("SELECT")
    const editTaskPriorityOptionHigh = document.createElement("option")
    const editTaskPriorityOptionMedium = document.createElement("option")
    const editTaskPriorityOptionLow = document.createElement("option")
    const editTaskConfirmButton = document.createElement("button")
    

    editTaskTitleInput.type = "text";
    editTaskTitleInput.id = "edit-task-title-input"
    editTaskTitleInput.value = task.title;
    editTaskForm.appendChild(editTaskTitleInput);

    editTaskDescriptionInput.type = "text";
    editTaskDescriptionInput.id = "edit-task-description-input"
    editTaskDescriptionInput.value = task.description;
    editTaskForm.appendChild(editTaskDescriptionInput);

    editTaskDueDateInput.type = "date"
    editTaskDueDateInput.id = "edit-task-due-date-input";
    editTaskDueDateInput.defaultValue = task.dueDate;
    editTaskForm.appendChild(editTaskDueDateInput);

    editTaskPriorityOptionHigh.text ="High"
    editTaskPriorityOptionMedium.text ="Medium"
    editTaskPriorityOptionLow.text ="Low"
    editTaskPriorityInput.add(editTaskPriorityOptionHigh)
    editTaskPriorityInput.add(editTaskPriorityOptionMedium)
    editTaskPriorityInput.add(editTaskPriorityOptionLow)
    editTaskPriorityInput.value = task.priority;
    editTaskPriorityInput.id = "edit-task-priority-input"
    editTaskForm.appendChild(editTaskPriorityInput);

    editTaskConfirmButton.innerHTML = "Change Task"
    editTaskConfirmButton.type = "button"
    editTaskConfirmButton.addEventListener("click", function(){
        changeTask(task),
        getCurrentProject(),
        clearDisplay(taskListDiv),
        renderTasks(currentProject)
    })
    editTaskForm.appendChild(editTaskConfirmButton)

    div.appendChild(editTaskForm)


}

export const changeTask = (task) => {
    const changedTitle = document.getElementById("edit-task-title-input").value
    const changedDescription = document.getElementById("edit-task-description-input").value
    const changedDueDate = document.getElementById("edit-task-due-date-input").value
    const changedPriority = document.getElementById("edit-task-priority-input").value
    task.setTitle(changedTitle);
    task.setDescription(changedDescription);
    task.setDueDate(changedDueDate);
    task.setPriority(changedPriority);
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
