// functions, arrays, objects are non primitive
// variables number, string, boolean, undefined, null these are primitive

function hello(param) {
    console.log("Hi ", param);
    return param;
}

hello("Hi");
let rVal = hello("Hello");
console.log(rVal);


//object ==> key-value pair
//empty object
// let obj = {}


let obj = {
    name: "steve",
    lastName: "Regers",
    address: {
        city: "Mahatten",
        state: "NewYork"
    },
    isAvenger: false,
    age: 35,
    movies: ["civil war", "first avenger"],
    sayhi: function () {
        console.log("cap say's hi");
        return "return blessings";
    }
}

console.log(obj);



//we can update exsisting property
obj.age = 25;
console.log(obj["age"]);
//we can add new property
obj.friends = ["a", "b", "c"];
// console.log(obj);
//we can also delete exsisting property
delete obj.movies;
// console.log(obj);


for (let key in obj) {
    console.log(key + " " + obj[key]);
}

// console.log(obj[address]);


//json ==> javascript object notation
//value ==> properties
//function ==> methods


