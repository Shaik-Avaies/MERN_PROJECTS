let fs = require("fs");

let frp = fs.promises.readFile("f1.txt");
console.log("Before");

let thenKaPromise = frp.then(cb);

console.log("then ka promise", thenKaPromise);

function cb(data){
    console.log("data " + data);
    return 10;
}

setTimeout(function(){
    console.log("then ka promise + ", thenKaPromise);
},1000);

console.log("After");

console.log("```````````````````````````````````````````");

//ThenKaPromise -> cb return value
// value -> value
// nothing -> undefined
// pending -> then will be wait for that pending promise 
// err -> then will not run








