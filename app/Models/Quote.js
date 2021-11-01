



export class Quote{
    constructor(data){
        this.content = data.content
        this.author = data.author
    }


    get Template(){
        return `
        <h5 class="change show" title="${this.author}">${this.content}</h5>
        
        `
    }

// {/* <h6 hidden>${this.author}</h6> */}

}