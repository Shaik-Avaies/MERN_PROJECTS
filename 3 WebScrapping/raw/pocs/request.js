let request = require("request");
let cheerio = require("cheerio");

request("https://google.com",cb);

console.log("Before");

function cb(err,res,html){
    if(err){
        console.log(err);
    }
    else{
        extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool = cheerio.load(html);
    let selectorElement = selectorTool("#SIvCob");
    console.log(selectorElement.text());
    console.log(selectorElement.html());
}

console.log("After");