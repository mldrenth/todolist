import './style.css';
import Task from './task.js'
import Project from './project.js'
import projectDiv from './interface.js'
import {renderTasks} from './interface.js'
import {projectList,getProjectList, currentProject, getCurrentProject, setCurrentProject} from './interaction.js'

const defaultProject = new Project("default");
const defaultTask = new Task("title", "description", "2012-08-12", "Low")
getProjectList();
projectList.push(defaultProject);
setCurrentProject("default");
getCurrentProject();
currentProject.addTask(defaultTask);
renderTasks(currentProject);