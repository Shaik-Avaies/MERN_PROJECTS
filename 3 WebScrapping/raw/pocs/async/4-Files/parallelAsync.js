const request = require("request");

let fs = require("fs");
console.log("Before");

console.log("F1 read sent");
fs.readFile("../f1.txt",cb);
console.log("F2 read sent");
fs.readFile("../f2.txt",cb);
console.log("F3 read sent");
fs.readFile("../f3.txt",cb);
console.log("F4 read sent");
fs.readFile("../f4.txt",cb);

function cb(err,data){
    if(err) console.log(err);
    else console.log("content " + data);
}

console.log("After");