let fs = require("fs");

console.log("Before");

//call back
// async(data,cb)
// fs.readFile("f1.txt",function cb(err,data){
//     if(err) console.log(err);
//     else{
//         console.log("data -> ", data);
//     }
// });

// console.log("After");





console.log("Before");
//we don't have to pass cb in promises
let token = fs.promises.readFile("f1.txt");
//token will be pending in starting stage
console.log(token);

//whenver the output is ready this function will be excuted
token.then(function(data){
    console.log(data);
})
token.catch(function(err){
    console.log(err);
})

// setTimeout(function(){
//     console.log("" + token);
// },3000);

console.log("After");