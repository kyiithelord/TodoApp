import { addTask, getTasks, removeTask } from "./todo.js";

// selector
const addNewTaskForm = document.querySelector("#addNewTaskForm");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");

// create a List
const createList = ({id,taskName}) => {
    const li = document.createElement("li");
    li.setAttribute("list-id",id);
    li.innerHTML = `<button class='lis-del-btn'>Del</button> ${taskName}`;
    return li;
};


// Render that mean using javascript language to show data on UI
const listRender = (lists) => {
    taskList.innerHTML = "";
    lists.forEach(list =>taskList.append(createList(list)));
    
};

// handler
const addNewTaskFormHandler = (event) => {
    event.preventDefault();
    addTask(taskInput.value);
    listRender(getTasks());
    taskInput.value=null;
};

const taskListHandler = (event) => {
    if(event.target.classList.contains("lis-del-btn")){
        const currentListId = event.target.closest("li").getAttribute("list-id");
        removeTask(parseInt(currentListId));
        listRender(getTasks());
    };
};


// listener
addNewTaskForm.addEventListener("submit",addNewTaskFormHandler);
taskList.addEventListener("click",taskListHandler);