import Todo from "./todo.js";
const todo = new Todo()

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
    todo.addTask(taskInput.value);
    listRender(todo.getTasks());
    taskInput.value=null;
};

const taskListHandler = (event) => {
    if(event.target.classList.contains("lis-del-btn")){
        const currentListId = event.target.closest("li").getAttribute("list-id");
        todo.removeTask(parseInt(currentListId));
        listRender(todo.getTasks());
    };
};


// listener
addNewTaskForm.addEventListener("submit",addNewTaskFormHandler);
taskList.addEventListener("click",taskListHandler);