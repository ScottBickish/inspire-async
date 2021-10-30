import {weatherService} from "../Services/WeatherService.js"
import { ProxyState } from "../AppState.js";



function _drawWeather(){
   
    const weather = ProxyState.weather
  
    document.getElementById('weather').innerHTML = weather.Template 
}

export class WeatherController{
 constructor(){
    this.getWeather()
    ProxyState.on('weather', _drawWeather)
    
 }

 async getWeather(){
     try {
        await weatherService.getWeather() 
     } catch (error) {
         console.error(error)
     }
 }
  Convert(temp){
    // document.getElementById('temp').innerHTML = ProxyState.weather.cel
    if(temp === 'far'){
        document.getElementById('far').classList.add('visually-hidden')
        document.getElementById('cel').classList.remove('visually-hidden')
    }else{
        document.getElementById('far').classList.remove('visually-hidden')
        document.getElementById('cel').classList.add('visually-hidden')
    }
 }


}