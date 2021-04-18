let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
const path = require('path');
const PDFDocument = require('pdfkit');
// const { createInflate } = require("zlib");

let url = "https://github.com/topics";

request(url,cb);

function cb(err,res,html){
    if(err) console.log(err);
    else extractHtml(html);
}

function extractHtml(html){
    let selectorTool = cheerio.load(html);
    let topics = selectorTool(".f3.lh-condensed.text-center.Link--primary.mb-0.mt-1");
    let allTopicsArr = [];
    for(let i=0;i<topics.length;i++){
        let topic = selectorTool(topics[i]).text();
        topic = topic.trim();
        // console.log(topic);
        allTopicsArr.push(topic);
    }
    let topicUrl = "";
    for(let i=0;i<allTopicsArr.length;i++){
        topicUrl = "https://github.com/topics/" + allTopicsArr[i];
        // console.log(topicUrl);
        processRepoPage(topicUrl);
    }
}

function processRepoPage(url){
    request(url,cb);
    function cb(err,res,html){
        if(err) console.log(err);
        else getRepoLinks(html);
    }
}

function getRepoLinks(html){
    let selectorTool = cheerio.load(html);
    let topicElem = selectorTool(".h1-mktg").text(); 
    let topicName = topicElem.trim();
    directryCreator("" + topicName);

    let arr = selectorTool("a.text-bold");
    for(let i=0;i<8 && i <arr.length;i++){
        let repoLink = selectorTool(arr[i]).attr('href');
        // console.log(repoLink);
        let repoName = repoLink.split("/").pop();
        // console.log(repoName);
        createFile(repoName,topicName);
        getIssues(repoLink,repoName,topicName);
    }
    console.log("````````````````````````````````````````");
}


function getIssues(repoLink,repoName,topicName){
    let link = "https://github.com" + repoLink + "/issues";
    request(link,cb);
    function cb(err,res,html){
        if(err) console.log(err);
        else{
            extractIssues(html,repoName,topicName);
        }
    }
}

function extractIssues(html,repoName,topicName){
    let selectorTool = cheerio.load(html);
    let issues = selectorTool(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
    // console.log(topicName);
    // console.log(repoName);
    let arr = [];
    for(let i=0;i<issues.length;i++){   
        let name = selectorTool(issues[i]).text();
        let link = selectorTool(issues[i]).attr('href');
        arr.push({
            Name: name,
            Link: link
        });
    }
    //file write
    // let filePath = path.join(__dirname , topicName, repoName + ".json");
    // fs.writeFileSync(filePath,JSON.stringify(arr));
    // console.table(arr);

    let filePath = path.join(__dirname , topicName, repoName + ".pdf");
    let pdfDoc = new PDFDocument;
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.text(JSON.stringify(arr));
    pdfDoc.end();
}

function directryCreator(dirPath){
    ditrPath = path.join(__dirname + dirPath);
    if(fs.existsSync(dirPath) == false){
        fs.mkdirSync(dirPath);
    }
}


function createFile(repoName,topicName){
    let pathOfFile = path.join(__dirname , topicName, repoName + ".pdf");
    // let filePath = path.join(__dirname , topicName, repoName + ".pdf");
    if(fs.existsSync(pathOfFile) ==  false){
        let createStream = fs.createWriteStream(pathOfFile);
        createStream.end();
    }
}