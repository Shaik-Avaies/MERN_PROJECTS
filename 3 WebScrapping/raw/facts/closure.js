// functions are treated like variables
let a = [1,2,3,4,5];

let b = a;

// function expression
let fnAddressHolder = function(){
    console.log("I am expression");
}


//higher order function -> hof are functions that operate on other functions, either by taking them as arguments or by returning them
let arr = [1,2,3,4,5]
function square(x){
    return x * x;
}

function map(arr,cb){
    let tarr = [];
    for(let i=0;i<arr.length;i++){
        let ans = cb(arr[i]);
        tarr.push(ans);
    }
    return tarr;
}

let newArr = map(arr,square);
console.log(newArr);


//hof 
function  outer(){ 
    console.log("I am Outer");
    return function inner(){
        console.log("I am Innter");
    }
}

let rVal = outer();
console.log(rVal);
rVal();


