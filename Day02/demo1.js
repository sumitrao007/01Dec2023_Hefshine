// anonymous function 
// function does not have any name 
var temp1 = function () {
    console.log("anonymous function is called ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(10, 20);
//    console.log("Result is "+res)
//fat arrow function / arrow function 
var temp3 = function () {
    console.log("fat arrow function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log(`
//     Addition is ${temp4(70,8)}
// `);
// optional paramater function
function add1(a, b) {
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN
}
// add1(10);
// add1(20,10);
function add2(a, b) {
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN
}
// add2();
// add2(50,60);
// default parameter function
function add3(a, b) {
    if (b === void 0) { b = 6; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN
}
// add3(10);
// add3(70,9)
function add4(a, b) {
    if (a === void 0) { a = 10; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN
}
add4();
