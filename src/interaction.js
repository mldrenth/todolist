export let projectList = [];
export let currentProject = projectList[0]

export const setCurrentProject = (projectList) => {
    currentProject = projectList[0]
}
export const getCurrentProject = () => {
    return currentProject
} 