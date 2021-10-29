import { sandboxApi  } from "./AxiosService.js";
import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"



class BackgroundsService{

async getPicture(){
    const res = await sandboxApi.get('images')
    console.log(res.data)
    ProxyState.image = new Image(res.data)
console.log(ProxyState.image)


}
}




export const backgroundsService = new BackgroundsService()