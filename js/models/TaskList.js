export default class TaskList{
    constructor(){
        this.arrTask = [];
    }
    addTask = task =>{
       return this.arrTask.push(task);
    }
    removeTask = index =>{
        return this.arrTask.splice(index, 1);
    }
    addCompleteTask = (index) =>{
        let task = this.arrTask[index];
        task.status = 1;
    }
    sortAZ = () =>{
        this.arrTask.sort((a, b) => a.taskName.localeCompare(b.taskName));
    } 
    sortZA = () =>{
        this.arrTask.reverse((a, b) => a.taskName.localeCompare(b.taskName));
    }


}