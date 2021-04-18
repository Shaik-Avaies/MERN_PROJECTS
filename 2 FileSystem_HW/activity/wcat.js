let input = process.argv.slice(2);
let fs = require("fs");
let options = [];
let filePaths = [];

for(let i=0;i<input.length;i++){
    if(input[i].charAt(0) == '-') options.push(input[i]);
    else  filePaths.push(input[i]);
}

//edge case, file path does not exist
for(let i=0;i<filePaths.length;i++){
    if(fs.existsSync(filePaths[i]) == false){
        console.log(filePaths[i], "doest not exist");
        return ;
    }
}

let allFilesContent = "";
for(let i=0;i<filePaths.length;i++){
    allFilesContent += fs.readFileSync(filePaths[i]);
    allFilesContent += "\n";
}

console.log(allFilesContent);


let allcontentArr = allFilesContent.split("\r\n");
let isSpresent = includes(options,"-s");
if(isSpresent){
    for(let i=0;i<allcontentArr.length;i++){
        if(allcontentArr[i]);
    }
}



function includes(arr,ele){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == ele) return true;
    }
    return false;
}




