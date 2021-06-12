

// console.log("Before");

// function cb(){
//     console.log("I will be called after 1 second");
// }

// setTimeout(cb,1000);
// console.log("After");




console.log("Before");
function cb(){
    console.log("I will be called after 1 second");
}
let finisher = setInterval(cb,2000);
setTimeout(function fn(){
    clearInterval(finisher);
    console.log("set Interval stopped");
},10000);
console.log("After");




