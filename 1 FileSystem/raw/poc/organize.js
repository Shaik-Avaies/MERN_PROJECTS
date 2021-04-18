
let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4","mkv","mp3"],
    archives: ["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents: ["docx","doc","pdf","xlsx","xls","odt","ods","ods","odg","odf","txt","ps","tex"],
    app: ["exe","dmg","pkg","deb"]
}


// check if the folder exists or not, if not create new 
function dirCreator(dirPath){
    if(fs.existsSync(dirPath) == false){
        fs.mkdirSync(dirPath);
    }
}

//  create a directy inside the given path
let input = process.argv.slice(2);
let toOrganizeDirPath = input[0];
let organizedFilesPath =  path.join(toOrganizeDirPath,"organized_files");

dirCreator(organizedFilesPath);

// organizedFilesFolder -> subFolder
for( let key in types){
    let innerDirPath = path.join(organizedFilesPath,key);
    dirCreator(innerDirPath);
}

let otherPath = path.join(organizedFilesPath, "others");
dirCreator(otherPath);



//Organize files given folder path
orgFiles(toOrganizeDirPath);


function getContent(dirpath){ 
    return fs.readdirSync(dirpath);
}

function isFileOrNot(dirpath){
    return fs.lstatSync(dirpath).isFile();
}

function getFolderName(dirpath){
    let str = dirpath.split(".");
    let ext = str.pop();
    console.log(ext);
    for(let key in types){
        for(let i=0;i<types[key].length;i++){
            if(types[key][i] == ext) return key;
        }
    }
    return "others";
}

function copyToDest(dirpath,destFolderPath){
    let originalName = path.basename(dirpath);
    let destFilePath = path.join(destFolderPath,originalName);
    fs.copyFileSync(dirpath,destFilePath);
}


function orgFiles(dirpath){
    let isFile = isFileOrNot(dirpath);
    if(isFile == true){
        console.log(dirpath);
        let destFolderName = getFolderName(dirpath);
        // console.log(dirpath, "-->" , destFolderName);
        let destFolderPath = path.join(organizedFilesPath,destFolderName);
        copyToDest(dirpath, destFolderPath);
    }   
    else{
        console.log(dirpath);
        let content = getContent(dirpath);
        for(let i = 0;i<content.length;i++){
            let childPath = path.join(dirpath,content[i]);
            orgFiles(childPath);
        }
    }
}

