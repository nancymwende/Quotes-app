export class Quote {
    showAuthor: boolean;
    constructor(public id: number, public yourName: string,public name: string, public  author: string, public Date: Date,likes:number,dislikes:number ){
        this.showAuthor=false;
    }
}
    



