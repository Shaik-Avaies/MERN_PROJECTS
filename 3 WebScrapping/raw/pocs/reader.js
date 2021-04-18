let fs = require("fs");
console.log("Before");

// Sync -> wait till the work completed, then only move ahead with the rest of the work
    // before 
    // work of sync
    //after
// Async -> move ahead with the rest of code, If the curr work is completed, give the result of curr work after the rest of code completes
//Generally we use Async for low priority tasks or huge data or time taken is huge
    // before
    // after
    // work of async


// let data = fs.readFileSync("f1.txt");
// console.log("content -> " + data);

fs.readFile("f1.txt",cb);
function cb(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log("content -> " + data);
    }
}

console.log("After");

