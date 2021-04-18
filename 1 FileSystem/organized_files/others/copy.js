let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2);

// copy doest not copy the actuall file
// it will copy the content of the file


fs.copyFileSync(input[0],path.join(input[1],"sample.js"));

