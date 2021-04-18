let a = "hello";

function libFn(){
    console.log("Inside libFn");
}

function libFn2(){
    console.log("Inside libFn2");
}

//It is an object
module.exports = {
    varName : a,
    fn: libFn
}

