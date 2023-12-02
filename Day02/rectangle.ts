
import {Shape} from './shape'

export class Rectangle extends Shape{
    length:number;
    bradth:number;
    area:number;

    constructor(l:number,b:number){
        super();
        this.length=l;
        this.bradth=b;
        this.area=0;
    }

    override myarea(): void {
        this.area=this.length*this.bradth;
    }

    display(){

        console.log(`
            -----Rectangle Area-----
            Length  :: ${this.length}
            Breadth :: ${this.bradth}
            Area    :: ${this.area}
        `)
    }

}