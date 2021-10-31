import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";



function _draw(){
    const quote = ProxyState.quote
    document.getElementById('quote').innerHTML = quote.Template
}

export class QuoteController{
    constructor(){
        this.getQuote()
        ProxyState.on('quote', _draw)
    }

    async getQuote(){
        try {
            quoteService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}