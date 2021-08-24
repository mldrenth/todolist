import './style.css';
import Task from './task.js'
import Project from './project.js'
import projectDiv from './interface.js'
import {renderTasks} from './interface.js'
import {projectList, currentProject, getCurrentProject, setCurrentProject} from './interaction.js'


const defaultProject = new Project("default");
const defaultTask = new Task("title", "description", "date", "priority")
projectList.push(defaultProject);
setCurrentProject(projectList);
currentProject.addTask(defaultTask);
renderTasks(currentProject);