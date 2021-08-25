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