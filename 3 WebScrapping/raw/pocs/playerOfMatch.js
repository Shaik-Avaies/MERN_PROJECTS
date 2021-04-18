let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";

let request = require("request");
let cheerio = require("cheerio");
const { get } = require("request");

request(url,cb);

function cb(err,res,html){
    if(err){
        console.log(err);
    }
    else{
        extractHtml(html);
    }
}

function extractHtml(html){
    // console.log(html);
    let selectorTool = cheerio.load(html);
    let allMatchNames = selectorTool(".match-info.match-info-FIXTURES .name-detail p");
    let links = selectorTool(".col-md-8.col-16 .match-info-link-FIXTURES");
    console.log(links.length);
    let getAllLinks = [];
    let matchNames = [];
    for(let i=0;i<links.length;i++){
        // console.log(links[i]);
        getAllLinks.push( selectorTool(links[i]).attr('href') );
    }
    console.log(allMatchNames.length);
    let j = 0;
    for(let i=0;i<allMatchNames.length;i+=2){
        let matchName = selectorTool(allMatchNames[i]).text() + " VS " + selectorTool(allMatchNames[i+1]).text();
        matchNames.push(matchName);
        let link = getAllLinks[j++];
        // getPlayerOfTheMatchParallel(matchName,link);
        getPlayerOfTheMatchSerial(matchNames,getAllLinks,0);
        // console.log( selectorTool(allMatchNames[i]).text() + " VS " + selectorTool(allMatchNames[i+1]).text() );
        // console.log(getAllLinks[j++]);
    }

    // .col-md-8.col-16 .match-info-link-FIXTURES
    // .match-info.match-info-FIXTURES .name-detail p
}


function getPlayerOfTheMatchParallel(matchName,link){
    link = "https://www.espncricinfo.com/" + link;
    request(link,cb);
    function cb(err,res,html){
        if(err) console.log(err);
        else extractHtmlToGetPlayer(html,matchName);
    }
}

function extractHtmlToGetPlayer(html,matchName){
    let selectorTool = cheerio.load(html);
    let player = selectorTool(".best-player-name a").text();
    console.log(matchName + " -> " + player);
}

function  getPlayerOfTheMatchSerial(matchNames,getAllLinks,i){
    if(i == matchNames.length) return ;
    request("https://www.espncricinfo.com/" + getAllLinks[i],cb);
    function cb(err,res,html){
        if(err) console.log(err);
        else{
            extractHtmlToGetPlayer(html,matchNames[i]);
            // let selectorTool = cheerio.load(html);
            // let player = selectorTool(".best-player-name a").text();
            // console.log(matchNames[i] + " -> " + player);
            getPlayerOfTheMatchSerial(matchNames,getAllLinks,i+1);
        }
    }
}