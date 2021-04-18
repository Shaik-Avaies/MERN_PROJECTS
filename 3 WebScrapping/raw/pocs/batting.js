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
    let teamNames = selectorTool(".Collapsible h5.header-title.label");
    let teamNamesArr = [];
    for(let i=0;i<teamNames.length;i++){
        let teamName = selectorTool(teamNames[i]).text();
        teamName = teamName.split("INNINGS")[0];
        // console.log(teamName);
        teamNamesArr.push(teamName);
    }
    // console.log(teamNamesArr);
    // console.log(batsmantable.length);
    // let tableHtml = "";
    // for(let i=0;i<batsmantable.length;i++){
    //     tableHtml += selectorTool(batsmantable[i]).html();
    // }
    // console.log(tableHtml);
    for(let i=0;i<batsmantable.length;i++){
        let batsmanNameElement = selectorTool(batsmantable[i]).find("tbody tr .batsman-cell");

        // let link = selectorTool(batsmantable[i]).find("tbody tr .batsman-cell a").attr('href');
        // request(link,cb1);
        // function cb1(err,res,html){
        //     if(err){
        //         console.log(err);
        //     }
        //     extractHtml1(html);
        // }
        // function extractHtml1(html){
        //     let selectorTool = cheerio.load(html);
        //     let dob = selectorTool(".ciPlayerinformationtxt:nth-child(2)").text();
        //     console.log(dob);
        // }

        // console.log(link);
        // console.log(teamNamesArr[i]);
        console.log(batsmanNameElement.length);
        for(let j=0;j<batsmanNameElement.length;j++){
            let playerName = selectorTool(batsmanNameElement[j]).text();
            // let link = selectorTool(batsmanNameElement[j]).find('a').attr('href');
            // let dateOfBirth = "";
            // request(link,cb1);
            // function cb1(err,res,html){
            //     if(err){
            //         console.log(err);
            //     }
            //     extractHtml1(html);
            // }
            // function extractHtml1(html){
            //     let selectorTool = cheerio.load(html);
            //     let dobText = selectorTool(".ciPlayerinformationtxt:nth-child(2)").text();
            //     let dob = dobText.split("Born")[1];
            //     dateOfBirth = dob;
            // }

            console.log(playerName + " Plays for " + teamNamesArr[i]);
        }
        console.log("`````````````````````````````````````````````````````````````````````");
    }
}