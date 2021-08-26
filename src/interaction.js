import Project from './project.js'

export let projectList = [];
export let currentProject 


export const setCurrentProject = (project) => {
    getProjectList();
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].projectName == project) {
            currentProject = projectList[i]
        }
       
    }
    console.log(getCurrentProject());
    return currentProject;
    
}
export const getCurrentProject = () => {
    return currentProject
} 

export const getProjectList = () => {
    return projectList
}

// export const removeTask = (entry) => {
//     getCurrentProject();
//     taskList = currentProject.getTaskList();
//     const index = taskList.indexOf(entry)
//     if (index > -1) {
//         taskList.splice(index,1);
//       }
// }