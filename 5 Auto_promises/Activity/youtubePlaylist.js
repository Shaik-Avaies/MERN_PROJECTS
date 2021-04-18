let puppeteer = require("puppeteer");
let fs = require("fs");
const { count } = require("console");

// no of videos
// views
// watch time
// list of videos -> in an excel
// intial page data get
// handle -> loader

console.log("Before");

(async function(){
    try{
        let browserInstance = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let playListTab = await browserInstance.newPage();  
        // await playListTab.goto("https://www.youtube.com/playlist?list=PLW_omwEM1aiem13x9zZVQ4IQEqAEVKA7S");
        await playListTab.goto("https://www.youtube.com/playlist?list=PLXuoY3Wtb-q8FHrSggnaaRmaF-tgBNIH7");


        // Get no of views and vide count
        let arr = await playListTab.evaluate(consoleFnGetStats,"#stats .style-scope.ytd-playlist-sidebar-primary-info-renderer");
        let videoCount = arr[0].split(" ")[0];
        // videoCount = videoCount.split(",");
        videoCount = Number(videoCount);
        // videoCount = parseInt(videoCount);
        let noOfViews = arr[1].split(" ")[0];
        console.log(videoCount + "  " + noOfViews);


        // Get each video details by scrolling to the bottom of the page
        let pCurrentVideosCount =  await scrollToBttom(playListTab,"#video-title");
        while(pCurrentVideosCount < videoCount - 50){
            pCurrentVideosCount = await scrollToBttom(playListTab,"#video-title");
        }

        let videoInfo = await playListTab.evaluate(consoleFnGetVideosInfo,"#video-title","span.style-scope.ytd-thumbnail-overlay-time-status-renderer");
        console.table(videoInfo);
    }
    catch(err){
        console.log(err);
    }
})();


function consoleFnGetStats(selector){
    let arr = document.querySelectorAll(selector);
    let newArr = [];
    newArr.push(arr[0].innerText,arr[1].innerText);
    return newArr;
}

function consoleFnGetVideosInfo(nameSelector,durationSelector){  
    let nameArr = document.querySelectorAll(nameSelector);
    let durationArr = document.querySelectorAll(durationSelector);
    console.log(nameArr.length + " " + durationArr.length);

    let details = [];
    for(let i=0;i<durationArr.length;i++){
        let name = nameArr[i].innerText;
        let duration = durationArr[i].innerText;
        details.push({
            name: name,
            duration: duration,
        });
    }
    return details
}

function scrollToBttom(page,title){
    function getLength(title){
        window.scrollBy(0,window.innerHeight);
        let titleEleArr = document.querySelectorAll(title);
        console.log(titleEleArr.length);
        return titleEleArr.length;
    }
    return page.evaluate(getLength,title);
}