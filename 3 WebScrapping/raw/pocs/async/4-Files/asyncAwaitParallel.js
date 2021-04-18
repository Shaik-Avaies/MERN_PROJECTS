let fs = require("fs");

let arr = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt"];

console.log("Before");

(async function fn(){
    let pArr = [];
    for(let i=0;i<arr.length;i++){
        let frp = fs.promises.readFile(arr[i]);
        pArr.push(frp);
    }
    let allFilesData = await Promise.all(pArr);
    for(let i=0;i<allFilesData.length;i++){
        console.log(allFilesData[i] + " ");
    }
})();

console.log("after");