
let helpFileObj = require("../commands/help");
let viewFileObj = require("../commands/view");
let organizeFileObj = require("../commands/organize");


// taking input
let input = process.argv.slice(2);

// node mycli.js view <dirname> tree
// node mycli.js view <dirname> flat
// node mycli.js organize <dirname>
// node mycli.js help


let cmd = input[0];

switch(cmd){
    case "view":
        viewFileObj.view(input[1],input[2]);
        // view(dirpath,mode);
        // console.log("view command implemented");
        break;
    case "organize":
        organizeFileObj.organize(input[1]);
        // console.log("organize command implemented");
        break;
    case "help":
        helpFileObj.helperFn();
        break;
    default:
        console.log("Wrong command: ( type help to see the list of all the commands )" );
}


