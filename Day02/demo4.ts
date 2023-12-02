 export class Myclass{
    public id:number;
    private fname:string;
    protected lname:string;

    constructor(id:number,f:string,l:string){
        // console.log("Constructor is called ")
        this.id=id;
        this.fname=f;
        this.lname=l;
    }  

    display(){
        console.log(`
            ID          :: ${this.id}
            First name  :: ${this.fname}
            Last Name   :: ${this.lname}
        `)
    }
    

}

// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();
