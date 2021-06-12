
// feature -> implement -> polyfill

let arr = [10,20,30,40,50];

// Map

function sqaure(a){
    return a * a;
}

function cube(a){
    return a * a * a;
}

let newArr = arr.map(sqaure);
console.log("new arr " + newArr);
console.log("original arr " + arr);

let cubeArr = arr.map(cube);
console.log();
console.log("new arr " + cubeArr);
console.log("original arr " + arr);


function myMap(arr,cb){
    let tArr = [];
    for(let i=0;i<arr.length;i++){
        let ans = cb(arr[i]);
        tArr.push(ans);
    }
    return tArr;
}
console.log("My map " + myMap(arr,sqaure));






// Filter
arr = [10,15,13,20,17,30,21,40,50];
function isEven(num){
    return num%2 == 0;
}

let evenArr = arr.filter(isEven);
console.log();
console.log("EvenArr " + evenArr);
console.log("arr " + arr);






// reduce
function adder(storage,ithElement){
    return storage + ithElement;
}

let reduceVal = arr.reduce(adder);
console.log();
console.log("reduced val " + reduceVal);


function myReduce(arr,cb){
    let storage = arr[0];
    for(let i=1;i<arr.length;i++){
        storage = cb(storage,arr[i]);
    }
    return storage;
}

console.log("sum " + myReduce(arr,adder));

