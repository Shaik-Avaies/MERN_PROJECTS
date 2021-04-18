const request = require("request");

let fs = require("fs");
console.log("Before");

// Version 1
console.log("F1 read sent");
let frp = fs.promises.readFile("../f1.txt");
frp.then(cb);

function cb(data){
    console.log("content " + data);
    console.log("F2 read sent");
    let f1rp = fs.promises.readFile("../f2.txt");
    f1rp.then(cb1);
}

function cb1(data){
    console.log("content " + data);
    console.log("F3 read sent");
    let f2rp = fs.promises.readFile("../f3.txt");
    f2rp.then(cb2);
}

function cb2(data){
    console.log("content " + data);
    console.log("F4 read sent");
    let f3rp = fs.promises.readFile("../f4.txt");
    f3rp.then(cb3);
}

function cb3(data){
    console.log("content " + data);
}



// Version 2
// let frp = fs.readFile("../f1.txt",cb);
// frp.then(cb).then(cb1).then(cb2).then(cb3).catch(function(err){
//     console.log("Insdie catch " + err);
// })

// function cb(data){
//     console.log("content " + data);
//     console.log("F2 read sent");
//     let f1rp = fs.readFile("../f2.txt");
//     return f1rp;
// }

// function cb1(err,data){
//     console.log("content " + data);
//     console.log("F3 read sent");
//     let f2rp = fs.readFile("../f3.txt");
//     return f2rp;
// }

// function cb2(err,data){
//     console.log("content " + data);
//     console.log("F4 read sent");
//     let f3rp = fs.readFile("../f4.txt");
//     return f3rp;
// }

// function cb3(err,data){
//     console.log("content " + data);
// }


console.log("After");