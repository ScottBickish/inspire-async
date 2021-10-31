import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { sandboxApi  } from "./AxiosService.js";


class TaskService{

   async getTasks(){
        const res = await sandboxApi.get('scottbickish/todos')
        let tasks = res.data.map(t => new Task(t))
        ProxyState.tasks = tasks
        console.log(ProxyState.tasks)
        
    }

    async postTask(rawTask){
       
        const res = await sandboxApi.post('scottbickish/todos', rawTask)
        const tasks = new Task(res.data)
        ProxyState.tasks = [...ProxyState.tasks, tasks]
    }

    async checkBox(id){
        let task = ProxyState.tasks.find(t => t.id === id)
        task.completed = !task.completed
        console.log(task)
        await sandboxApi.put('scottbickish/todos/'+ id, task)
        ProxyState.tasks = ProxyState.tasks
        
       
    }
    async deleteTask(id){
        await sandboxApi.delete('scottbickish/todos/'+ id )
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != ProxyState.tasks.id)
        ProxyState.tasks = ProxyState.tasks
        this.getTasks()
    }

}





export const taskService = new TaskService()