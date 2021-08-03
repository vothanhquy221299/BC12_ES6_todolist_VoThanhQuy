export default class TaskList{
    constructor(){
        this.arrTask = [];
        this.arrCompleteTask = [];
    }
    addTask = task =>{
       return this.arrTask.push(task);
    }
    removeTask = index =>{
        return this.arrTask.splice(index, 1);
    }
    addCompleteTask = index =>{
        this.arrCompleteTask = [...this.arrCompleteTask];
        this.removeTaskTask(index);
    } 

}