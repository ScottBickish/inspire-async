
import { backgroundsService } from "../Services/BackgroundsService.js"
import { ProxyState } from "../AppState.js"

function _drawImage(){
    console.log(ProxyState.image)
    document.getElementById('img').style.backgroundImage = `url('${ProxyState.image.imgUrl}')`
}

export class BackgroundsController{
    constructor(){
        this.getPicture()
        ProxyState.on('image', _drawImage)
    }

    async getPicture(){
        try {
          await backgroundsService.getPicture()  
        } catch (error) {
            console.error(error)
        }
    }
}