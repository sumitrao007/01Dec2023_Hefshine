// anonymous function 
// function does not have any name 
let temp1=function (){
    console.log("anonymous function is called ");
}
// temp1();
 let temp2=function (a:number,b:number):number{
        return (a+b)
    }

   let res= temp2(10,20);
//    console.log("Result is "+res)

//fat arrow function / arrow function 

   let temp3= ()=>{
        console.log("fat arrow function is called")
    }
    // temp3();

   let temp4= (a:number,b:number):number=>{
        return(a+b);
    }

    // console.log(`
    //     Addition is ${temp4(70,8)}
    // `);

    // optional paramater function

    function add1(a:number,b?:number){
        console.log("Value of a is "+a)//10
        console.log("Value of b is "+b)//undefined
        console.log("Addition of a+b is "+(a+b!))//NAN

    }

    // add1(10);
    // add1(20,10);

    function add2(a?:number,b?:number){
        console.log("Value of a is "+a)//10
        console.log("Value of b is "+b)//undefined
        console.log("Addition of a+b is "+(a!+b!))//NAN

    }
    // add2();
    // add2(50,60);

    // default parameter function

    function add3(a:number,b:number=6){
        console.log("Value of a is "+a)//10
        console.log("Value of b is "+b)//undefined
        console.log("Addition of a+b is "+(a+b))//NAN

    }

    // add3(10);
    // add3(70,9)

    function add4(a:number=10,b?:number){
        console.log("Value of a is "+a)//10
        console.log("Value of b is "+b)//undefined
        console.log("Addition of a+b is "+(a+b!))//NAN
    }

    // add4();
