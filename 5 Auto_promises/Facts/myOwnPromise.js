// cb -> promise
// use callback and implement promise
// convert readFile to readFile.promises

// resolve -> when work completes
// reject -> when work fails

let fs = require("fs");

function promisifiedReadFile(filePath){
    //  new promise is pending state promise intially
    // when resolve called then will be excuted
    // when reject called catch will be excuted
    // new promise have two functions as args, they will be called based on failure or success
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,function cb(err,data){
            if(err){
                reject(err);
                // console.log(err);
            }
            else{
                resolve(data);
                // console.log(data);
            }
        });
    })
}


let fReadPromise = promisifiedReadFile("f1.txt");

console.log(fReadPromise);

fReadPromise.then(function(data){
    console.log( "" + data);
})
fReadPromise.catch(function(err){
    console.log(err);
})


