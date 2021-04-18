let fs = require("fs");
// console.log("Before");
// let frp = fs.promises.readFile("f1.txt");
// frp.then(cb);
// function cb(data){
//     console.log("data " + data);
//     return fs.promises.readFile("f2.txt");
// }



// Read one file
// console.log("Before");

// (async function(){
//      let frp = fs.promises.readFile("f1.txt");
//      console.log("Before adding await");
//      let data = await frp;
//      console.log("data " + data);
//      console.log("After reading data");
// })()

// (async function(){
//     let frp = fs.promises.readFile("f1.txt");
//     console.log("Before adding await");
//     frp.then(function(data){
//         console.log("data " + data);
//         console.log("After reading data");
//     })
// })()

// console.log("After");





// Read two file
console.log("Before");

(async function(){
     let frp = fs.promises.readFile("f1.txt");
     console.log("Before adding await");
     let data = await frp;
     console.log("data " + data);
     console.log("After reading data");
     let f2p = fs.promises.readFile("f2.txt");
     let data1 = await(f2p);
     console.log("data1 " + data1);
})()


// (async function(){
//     let frp = fs.promises.readFile("f1.txt");
//     console.log("Before adding await");
//     frp.then(function(data){
//         console.log("data " + data);
//         console.log("After reading data");
//         let f2p = fs.promises.readFile("f2.txt");
//         return f2p;
//     })
//     .then(function(data){
//         console.log("data " + data);
//     })
// })()

console.log("After");
