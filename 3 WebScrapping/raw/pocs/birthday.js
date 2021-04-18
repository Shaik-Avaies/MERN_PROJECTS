let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

let request = require("request");
let cheerio = require("cheerio");

request(url,cb);

console.log("Before");

function cb(err,res,html){
    if(err){
        console.log(err);
    }
    else{
        extractHtml(html);
    }
}

console.log("After");


function extractHtml(html){
    let selectorTool = cheerio.load(html);
    let batsmantable = selectorTool(".table.batsman");
    for(let i=0;i<batsmantable.length;i++){
        let batsmanNameElement = selectorTool(batsmantable[i]).find("tbody tr .batsman-cell a");
        for(let j=0;j<batsmanNameElement.length;j++){
            let link = selectorTool(batsmanNameElement[j]).attr('href');
            let name = selectorTool(batsmanNameElement[j]).text();
            printBirthDay(link,name);
            // console.log(link);
        }
        console.log("`````````````````````````````````````````````````````````````````````");
    }
}


function printBirthDay(link,name){
    request(link,cb);
    function cb(err,res,html){
        if(err){
            console.log(err);
        }
        else{
            extractBirthDay(html,name);
        }
    }
}

function extractBirthDay(html,name){
    let selectorTool = cheerio.load(html);
    let birthDayEle = selectorTool(".ciPlayerinformationtxt span");
    let birthDay = selectorTool(birthDayEle[1]).text();
    console.log(name + " was born on " + birthDay);
}