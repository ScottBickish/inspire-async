import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi  } from "./AxiosService.js";

class WeatherService{
    async getWeather(){
        const res = await sandboxApi.get('weather')
        
        ProxyState.weather = new Weather(res.data)
        
    }

}


export const weatherService = new WeatherService()