
// call back function -> the function that are passed as a parameter to be used by that function later

// smaller functions
function add(x,y){
    return x + y;
}

function sub(x,y){
    return x - y;
}

function divide(x,y){
    if(y == 0) return "Invalid operation";
    return x % y;
}

function multiply(x,y){
    return x * y;
}



// higher order function -> a function that accepts a function as a arguments or returns a function
// we use composition instead of inheritence
// bigger function
function calculator(x,y,operatorFun){
    let ans = operatorFun(x,y);
    return ans;
}

console.log("Result is " + calculator(10,20,add));
console.log("Result is "  + calculator(10,20,multiply));
console.log("Result is " + calculator(10,20,divide));
console.log("Result is "+ calculator(10,20,sub));
