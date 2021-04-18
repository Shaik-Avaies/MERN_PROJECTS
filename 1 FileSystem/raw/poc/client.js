let libfileObj = require("./lib.js");

//since a as key is not there in lib.js exported object ==> It will give undefined
console.log(libfileObj.a);
console.log(libfileObj.varName);

libfileObj.fn();