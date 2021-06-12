// Java -> array is a collection of homogneous data types
// JS -> array is collection of anything

//There are no array in JS, Just object with key as index


let a = []

let arr = [
    1,
    1.1,
    "String",
    null,
    true,
    {name: "SA"},
    [1,2,3],
    function sayHi(){
        return "Hi";
    }
];

console.log(arr[5].name);
console.log(arr[7]);
console.log(arr[7]());

for(let i = 0;i< arr.length;i++){
    console.log(arr[i]);
}

for(let key in arr){
    console.log(key + " " + arr[key]);
}

arr[10] = "10th";

console.log(arr);
console.log(arr.length);


//we can add anything as key, But to maintain array rules we have only numbers as index
arr["abc"] = "something";
console.log(arr);
console.log(arr.length);
//array length will be calculated on the basis of last numeric index + 1
//If last index is string, then it will consider last numeric index


// This is known as adopter design pattern
    //using one data strucure implementing other data structure


// The values inside the const array can be change, it can add new items to const arrays but it cannot reference to a new array.
const list = [1,2,3,4];
list.unshift(0);
console.log(list);


//remove last
list.pop();
console.log(list);

// addLast 
list.push(4);
console.log(list);

//add first
list.unshift(-1);
console.log(list);

//remove first
list.shift();
console.log(list);


let sliceList = list.slice(2,4);
console.log("sliced " + sliceList);
console.log("original " + list);


//splice will change the actual array
let spliceList = list.splice(2,1);  // index, count
console.log("spliced " + spliceList);
console.log("original " + list);


let string = "Hello Hy By Hola";
let stringArr = string.split(" ");
console.log(stringArr);
let joinedStr = stringArr.join("-");
console.log(joinedStr);







