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
    addCompleteTask = (index) =>{
        let completeTask ="";
        if (index < this.arrTask.length) {
            completeTask = this.arrTask.slice(index, index + 1);
          } else {
            completeTask = this.arrTask.slice(index);
         
          }
        this.arrCompleteTask = [...this.arrCompleteTask, ...completeTask];
        this.removeTask(index);
        // console.log("index")
    } 

}