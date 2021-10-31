import {taskService} from "../Services/TaskService.js"
import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

function _draw(){
    
    let tasks = ProxyState.tasks
    let template = ''
    tasks.forEach(t => template += t.Template)
    document.getElementById('task').innerHTML = template
    let tasksleft = ProxyState.tasks.filter(t => t.completed != true).length
    document.getElementById('total').innerHTML = `<p>${tasksleft} tasks left </p>`
}

export class TaskController{
    constructor(){
        this.getTasks()
        ProxyState.on('tasks', _draw)
    }

    async getTasks(){
        try {
            await taskService.getTasks()
        } catch (error) {
            console.error(error)
        }
    }

    async postTask(){
        try {
            window.event.preventDefault()
            let form = window.event.target
            let rawTask = {description: form.description.value}
            await taskService.postTask(rawTask) 
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    async checkBox(id){
        try {
            await taskService.checkBox(id)
        } catch (error) {
            console.error(error)
        }
    }

    

    async deleteTask(id){
        try {
            if(window.confirm('are you sure you want to delete?')){
                await taskService.deleteTask(id)
                
            }
        } catch (error) {
            console.error(error)
        }
    }

}