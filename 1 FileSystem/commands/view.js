let fs = require('fs');
let p = require("path");

function view(dirpath,mode){
    if(mode == "tree"){
        viewTree(dirpath,"");
    }
    else if(mode == "flat"){
        viewFlat(dirpath);
    }
    else{
        console.log("Wrong mode");
    }
}

function isFileOrNot(dirpath){
    return fs.lstatSync(dirpath).isFile();
}

function getContent(dirpath){ 
    return fs.readdirSync(dirpath);
}


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
            viewFlat(childPath);
        }
    }
}

function viewTree(dirpath,indent){
    let isFile = isFileOrNot(dirpath);
    if(isFile == true){
        console.log(indent,p.basename(dirpath));
    }
    else{
        console.log(indent,p.basename(dirpath));
        let content = getContent(dirpath);
        for(let i=0;i<content.length;i++){
            let childPath = p.join(dirpath,content[i]);
            viewTree(childPath, indent + "\t");
        }
    }
}

module.exports = {
    view: view
}
