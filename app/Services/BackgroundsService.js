import { sandboxApi  } from "./AxiosService.js";
import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"



class BackgroundsService{

async getPicture(){
    const res = await sandboxApi.get('images')
   
    ProxyState.image = new Image(res.data)



}
}




export const backgroundsService = new BackgroundsService()