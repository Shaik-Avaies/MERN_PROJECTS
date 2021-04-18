let fs = require("fs");


// console.log("before");
// fs.readFile("f1.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data -> " + data);
//     }
// });
// console.log("after");




// console.log("before");
// let fileReadPromise = fs.promises.readFile("f1.txt");
// fileReadPromise.then(function(data){
//     console.log("data -> " + data);
// })
// fileReadPromise.catch(function(err){
//     console.log(err);
// })
// console.log("after");





// polyfill
// input -> file path
// output -> promise -> file read
console.log("before");
function promiseWalaReadFile(filePath){
    // 1. wrap the function (readFile in this case) inside a promise object
    // 2. call resolve where you think work is completed 
    // 3. call reject where you get err 
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,function cb(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    });
}

let myOwnreadFilePromise = promiseWalaReadFile("f1.txt");

function promisifiedSetTimeOut(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },2000)
    })
}

function scb(data){
    console.log("data -> " + data);
    // return 10;
    return promisifiedSetTimeOut;
}
function fcb(err){
    console.log("err -> " + err);
}


// then ka promise ka output depends on the scb return value
let thenkaPromise = myOwnreadFilePromise.then(scb);
console.log(thenkaPromise);
setTimeout(function(){
    console.log(thenkaPromise);
},2000);

thenkaPromise.then(function(data){
    console.log(data);
})


myOwnreadFilePromise.catch(fcb);

console.log("after");