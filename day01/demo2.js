// Function 
// 1 function without parameter & without Return type
// 2 function with parameter & without Return type
// 3 function without parameter & with Return type
// 4 function with parameter & with Return type
// 1 function without parameter & without Return type
function add1() {
    console.log("U r in first type function");
}
// add1();
// 2 function with parameter & without Return type
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(10,2);
// 3 function without parameter & with Return type
function add3() {
    return (8 + 8);
}
var res = add3();
// console.log("Result is "+res);
// 4 function with parameter & with Return type
function add4(a, b) {
    return (a + b);
}
console.log("\n    Addition is ".concat(add4(10, 4), "\n"));
