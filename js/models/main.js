import Task from "./Task.js"
import TaskList from "./TaskList.js";

let taskList = new TaskList();


const getEle = id => document.getElementById(id);

//Render Task 
const renderTask = (arrTask) => {
    let content = "";
    arrTask.map((item, index) => {
        if (item.status == 0) {
            content += `
            <li>
                <span>${item.taskName}</span>
                <div class="buttons">
                    <button class="remove" onclick="removeTask(${index})"><i class="fa fa-trash-alt"></i></button>
                    <button class="complete" onclick="addNewCompleteTask(${index})"><i class="fa fa-check-circle"></i> </button>
                </div>
            </li>
        `;
        }

    });
    getEle('todo').innerHTML = content;
}

//Add New Task 
const addNewTask = () => {
    let newTask = getEle('newTask').value;
    const task = new Task(newTask, 0);
    taskList.addTask(task);
    renderTask(taskList.arrTask);
    getEle('newTask').value = "";


}
getEle('addItem').addEventListener('click', addNewTask);


//Remove Task
const removeTask = (index) => {
    taskList.removeTask(index);
    renderTask(taskList.arrTask);
    renderCompletedTask(taskList.arrTask);
}

//Check All
const checkAllCompleteTask = () => {
    taskList.arrTask.map((item, index) => {
        if (item.status == 0) {
            taskList.addCompleteTask(index);
        }
    })
    renderTask(taskList.arrTask);
    renderCompletedTask(taskList.arrTask);
}
getEle('one').addEventListener('click', checkAllCompleteTask);

//Sort A-Z
const sortA_Z = () => {
    taskList.sortAZ();
    renderTask(taskList.arrTask);
    renderCompletedTask(taskList.arrTask);
}
getEle("two").addEventListener('click', sortA_Z);

//Sort Z-A
const sortZ_A = () => {
    taskList.sortZA();
    renderTask(taskList.arrTask);
    renderCompletedTask(taskList.arrTask);
}
getEle("three").addEventListener('click', sortZ_A);
/**-------------------------------------------------------------------------------------------- */
// Render Completed Task
const renderCompletedTask = arrTask => {
    let content = "";
    arrTask.map((item, index) => {
        if (item.status == 1) {
            content += `
        <li>
        <span>${item.taskName}</span>
        <div class="buttons">
            <button class="remove" onclick="removeTask(${index})"><i class="fa fa-trash-alt"></i></button>
            <button class="complete"><i class="fa fa-check"></i></button>
        </div>
    </li>
        `;
        }

    })
    getEle('completed').innerHTML = content;
}

//Add Completed Task
const addNewCompleteTask = index => {
    taskList.addCompleteTask(index);
    renderCompletedTask(taskList.arrTask);
    renderTask(taskList.arrTask)
}


window.removeTask = removeTask;
window.addNewCompleteTask = addNewCompleteTask;