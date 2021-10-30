import { timeService } from "../Services/TimeService.js";
import { ProxyState } from "../AppState.js"



   




export class TimeController{
    constructor(){
        this.update()
        this.getTime()
    }
    
    getTime(){
        let today = new Date();
        let Time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
        document.getElementById('time').innerHTML = Time
        
    }
    update(){
        setInterval(() => {
            this.getTime()
       
 }, 1000)
    }

    
    
 
}