import './style.css';
import Task from './task.js'
import Project from './project.js'
import projectDiv from './interface.js'
import {renderTasks} from './interface.js'

const defaultProject = new Project("default");
defaultProject.addTask("blub");
renderTasks(defaultProject);