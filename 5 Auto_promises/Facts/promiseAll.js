let fs = require("fs");

let p1 = fs.promises.readFile("f1.txt");
let p2 = fs.promises.readFile("f2.txt");
let p3 = fs.promises.readFile("f3.txt");

// Promise.all tellls that after reading all files, gives the result in combinedPromiseArr in respective order
let combinedPromise = Promise.all([p1,p2,p3]);
combinedPromise.then(function(combinedPromiseArr){
    // console.log(combinedPromiseArr);
    for(let i=0;i<combinedPromiseArr.length;i++){
        console.log( "" + combinedPromiseArr[i]);
    }
})