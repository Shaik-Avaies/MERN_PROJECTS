let lib = require("./lib");
const { promisifiedAnalyseDate } = require("./lib");

// cb --> trust issuea
let amount = 100;
let tocut = 20;

function chargeCreditCard(){
    amount  = amount - tocut;
    console.log(` Remaining amout ${amount} `);
}

console.log("Before");

// async function
// lib.analyzeDate("TV",chargeCreditCard);

let promiseObj = promisifiedAnalyseDate("TV");
promiseObj.then(chargeCreditCard);

console.log("After");