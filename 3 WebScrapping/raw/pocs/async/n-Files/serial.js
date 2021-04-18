let fs = require("fs");
let arr = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt"];

console.log("before");


//It will be deadlock
//For loop will be waiting for cb
//cb will be waiting stack to be empty 
//stack is not empty because for loop is running

// for(let i=0;i<arr.length;){
//     console.log(i);
//     fs.readFile(arr[i],function(err,data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("data - > " + data);
//             i++;
//         }
//     });
// }


function reader(arr,n){
    if(arr.length == n) return ;
    fs.readFile(arr[n],function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log("data -> " +  data);
            reader(arr,n+1);
        }
    })
}


reader(arr,0);
console.log("after");


