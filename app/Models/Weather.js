

export class Weather{
    constructor(data){
        
        this.temp = data.main.temp
        this.icon =  `http://openweathermap.org/img/wn/${data.weather[0].icon
}@2x.png`
        this.area = data.name
        this.far = Math.floor((data.main.temp - 273.15) * 9/5 + 32) + ' °F'  
        this.cel = Math.floor(this.temp - 273.15) + ' °C'
    }


get Template(){
    return `
    
    <div>
    <img class="icon" src="${this.icon}">
 <b id="far" class="selectable" onclick="app.weatherController.Convert('far')">${this.far}</b>
 <b id="cel" class="selectable visually-hidden" onclick="app.weatherController.Convert('cel')">${this.cel}</b>
  <p><b>${this.area}</b></p>
  </div>
    `
}


}