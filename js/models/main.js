import Task from "./Task.js"
import TaskList from "./TaskList.js";

let taskList = new TaskList();

const getEle = id => document.getElementById(id);

//Render Task 
const renderTask = (arrTask) =>{
    let content = "";
    arrTask.map((item, index) => {
            content += `
                <li>
                    <span>${item.taskName}</span>
                    <div class="buttons">
                        <button class="remove" onclick="removeTask(${index})"><i class="fa fa-trash-alt"></i></button>
                        <button class="complete" onclick="renderCompletedTask(${index})"><i class="fa fa-check-circle"></i> </button>
                    </div>
                </li>
            `;
    });
    getEle('todo').innerHTML = content;
}
//SetLocalStorage
const setLocalStorage = (arrTask) => {
   localStorage.setItem("TASKLIST", JSON.stringify(arrTask));
}
//SetLocalStorage
const getLocalStorage = () =>{
    if(localStorage.getItem("TASKLIST")){
        taskList.arrTask = JSON.parse(localStorage.getItem("TASKLIST"));
    }
    renderTask(taskList.arrTask);
}
getLocalStorage();

//Add New Task 
const addNewTask = () =>{
    let newTask = getEle('newTask').value;
    const task = new Task(newTask);
    taskList.addTask(task);
    renderTask(taskList.arrTask);
}
getEle('addItem').addEventListener('click', addNewTask);

//Remove Task
const removeTask = (index) =>{
    taskList.removeTask(index);
    renderTask(taskList.arrTask);
    setLocalStorage(taskList.arrTask);
}

/**-------------------------------------------------------------------------------------------- */
//Render Completed Task
const renderCompletedTask = arrCompleteTask =>{
    let content ="";
    arrCompleteTask.map((item, index) =>{
        content += `
        <li>
        <span>${item.taskName}</span>
        <div class="buttons">
            <button class="remove" onclick=""><i class="fa fa-trash-alt"></i></button>
            <button class="complete"><i class="fa fa-check"></i></button>
        </div>
    </li>
        `;
    })
    getEle('completed').innerHTML = content;
}


//Add Completed Task
const addNewCompleteTask = index => {
    taskList.addCompleteTask(index);

}
window.removeTask = removeTask;
