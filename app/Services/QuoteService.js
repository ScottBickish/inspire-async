import { sandboxApi  } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"

class QuoteService{

    async getQuote(){
        const res = await sandboxApi.get('quotes')
        console.log(res.data)
        ProxyState.quote = new Quote(res.data)
    }
}





export const quoteService = new QuoteService()