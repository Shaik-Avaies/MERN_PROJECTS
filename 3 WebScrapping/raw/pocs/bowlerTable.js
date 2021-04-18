
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
        // console.log(html);
        extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool = cheerio.load(html);
    let blowerstable = selectorTool(".table.bowler");
    // whenver using index wrap with selectorTool untill we learn this
    // rule -> index ==> use selectorTool
    let hwtName = "";
    let hwickets = 0;
    for(let i=0;i<blowerstable.length;i++){
        let singleInningsBol = selectorTool(blowerstable[i]).find("tbody tr");
        for(let j=0;j<singleInningsBol.length;j++){
            let singleAllCols = selectorTool(singleInningsBol[j]).find("td");
            let name = selectorTool(singleAllCols[0]).text();
            let wickets = selectorTool(singleAllCols[4]).text();
            console.log("Name -> ", name, "Wickets -> ", wickets);
            if(wickets >= hwickets){
                hwickets = wickets;
                hwtName = name;
            }
        }
        console.log("`````````````````````````````````````````````````");
        //get all bowlers and wickets
    }

    console.log(hwtName + " : " + hwickets);
}



console.log("After");