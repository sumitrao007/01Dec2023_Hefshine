// basic of array 
// array is growable & shrinkable dynamically 
// array is store hetrogenous value as well as homogenous value 
// let a:number[]=[7,8,9,40];
var a1 = [];
var a2 = [2.5, 'sumit'];
// a2[3]=true;
var a3 = [5, true];
// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i]);
// }
// console.log(a);
// console.log(a.join("#"));
// console.log(a.join(" "));
//foreach
// a.forEach((myvalue,i,arr)=>{
//     console.log("value is "+myvalue+" index is  "+i+" Array is "+arr);
// });
// Rest paramter function
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(item);
    console.log(str);
}
// display("Sumit",10,20,30,40);
// push & pop
// LIFO 
// let a:number[]=[];
// a.push(10);
// console.log(a);
// a.push(20,30,40)
// console.log(a);
// let poped=a.pop();
// console.log(a);
// console.log("Poped value is "+poped);
// let a:number[]=[10,45,78,90];
// console.log(a);
// a.splice(2,0,100);
// console.log(a)
// a.splice(1,0,90,66)
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(3,2);
// console.log(a)
// a.splice(2,1,600)
// console.log(a);
//slice
// It is copy a section of data from an array and return a new array
var course = ["COre Java", 'Advnaced Java', 'Spring', 'Spring boot', 'Angular', 'Sql', 'AWS', 'jenking', 'Docker'];
var temp = course.slice(1, 7);
// console.log(`
//     Orignal Array
//     ${course}
//     ---------------
//     Copied array
//     ${temp}
// `);
var temp1 = course.slice(1);
// console.log(`
//     Orignal Array
//     ${course}
//     ---------------
//     Copied array
//     ${temp1}
// `);
// Map Method 
var a = [2, 3, 4, 5, 6];
var srqArr = a.map(function (value) {
    return (value * value);
});
console.log("\n    Original Array\n    ".concat(a, "\n    ----------------\n    Square Array\n    ").concat(srqArr, "\n"));
