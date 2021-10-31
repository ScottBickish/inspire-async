


export class Task{
    constructor(data){
        this.id = data.id 
        this.description = data.description
        this.checked = data.checked || false

    }



    get Template(){
    return `
    <div class="col">
    <input type="checkbox" id="chkbox" name="chkbox" ${this.checked ? 'checked' : ''} onclick="app.taskController.checkBox('${this.id}')" >${this.description}<button onclick="app.taskController.deleteTask('${this.id}')">X</button>
    </div>
    
     
    `
    }
}