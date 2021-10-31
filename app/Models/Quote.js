



export class Quote{
    constructor(data){
        this.content = data.content
        this.author = data.author
    }


    get Template(){
        return `
        <h4 class="text-secondary show" title="${this.author}">${this.content}</h4>
        
        `
    }

// {/* <h6 hidden>${this.author}</h6> */}

}