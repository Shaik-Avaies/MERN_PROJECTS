const request = require("request");

let fs = require("fs");
console.log("Before");

console.log("F1 read sent");
fs.readFile("../f1.txt",cb);

function cb(err,data){
    console.log("content " + data);
    console.log("F2 read sent");
    fs.readFile("../f2.txt",cb1);
}

function cb1(err,data){
    console.log("content " + data);
    console.log("F3 read sent");
    fs.readFile("../f3.txt",cb2);
}

function cb2(err,data){
    console.log("content " + data);
    console.log("F4 read sent");
    fs.readFile("../f4.txt",cb3);
}

function cb3(err,data){
    console.log("content " + data);
}


console.log("After");