// use nodejs fs module to implement functions
let fs = require('fs');
let p = require("path");

let input = process.argv.slice(2);
let path = input[0];


function isFileOrNot(dirpath){
        //check extension
    return fs.lstatSync(dirpath).isFile();
}

function getContent(dirpath){ 
    return fs.readdirSync(dirpath);
}


//if file just print the file name
//if directry then print the name and content 
    //then recur for the childrens
function viewFlat(dirpath){
    let isFile = isFileOrNot(dirpath);
    if(isFile == true){
        console.log(dirpath + "*");
    }
    else{
        console.log(dirpath);
        let content = getContent(dirpath);
        for(let i=0;i<content.length;i++){
            let childPath = p.join(dirpath,content[i]);
            // let childPath = dirpath + "\\" + content[i];
            viewFlat(childPath);
        }
    }
}

viewFlat(path);

console.log("\n\n\n\n")


function viewTree(dirpath,indent){
    let isFile = isFileOrNot(dirpath);
    if(isFile == true){
        // let strArr = dirpath.split("//");
        // let toPrint = strArr.pop();
        // console.log(indent, toPrint + "*");
        console.log(indent,p.basename(dirpath));
    }
    else{
        // let strArr = dirpath.split("//");
        // let toPrint = strArr.pop();
        // console.log(indent, toPrint);
        console.log(indent,p.basename(dirpath));
        let content = getContent(dirpath);
        for(let i=0;i<content.length;i++){
            let childPath = p.join(dirpath,content[i]);
            // let childPath = dirpath + "//" + content[i];
            viewTree(childPath, indent + "\t");
        }
    }
}

viewTree(path,"");