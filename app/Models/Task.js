import { ProxyState } from "../AppState.js"


export class Task{
    constructor(data){
        this.id = data.id 
        this.description = data.description
        this.completed = data.completed || false

    }



    get Template(){
    return `
    
    <div class="col">
    <input type="checkbox" id="chkbox" name="chkbox" ${this.completed ? 'checked' : ''} onclick="app.taskController.checkBox('${this.id}')" >${this.description}<button onclick="app.taskController.deleteTask('${this.id}')">X</button>
    </div>
    
     
    `
    }

    // get Tasksleft(){
    //     let tasksremaining = ProxyState.tasks.filter(t => t.task === this.id && split.checked == false)
    //     return tasksremaining.length
    //   }
}