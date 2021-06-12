

Array.prototype.myMap = function(cb){
    let tArr = [];
    for(let i=0;i<this.length;i++){
        let ans = cb(this[i]);
        tArr.push(ans);
    }
    return tArr;
}

let arr = [10,20,30,40];
let arr2 = [100,200,300,400];

let newArr = arr.myMap(sqaure);
let cubeArr = arr2.myMap(cuber);

console.log("new arr ", newArr);
console.log("new arr ", cubeArr);

function sqaure(a){
    return a * a;
}

function cuber(a){
    return a * a * a;
}