
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";

let request = require("request");
let cheerio = require("cheerio");

request(url,cb);

console.log("Before");

function cb(err,res,html){
    if(err){
        console.log(err);
    }
    else{
        // console.log(html);
        extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool = cheerio.load(html);
    let selectorElement = selectorTool(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    console.log(selectorElement.length);
    // whenver using index wrap with selectorTool untill we learn this
    // rule -> index ==> use selectorTool
    let lastbComment = selectorTool(selectorElement[0]).text();
    console.log(lastbComment);
    // console.log(selectorElement.html());
}



console.log("After");