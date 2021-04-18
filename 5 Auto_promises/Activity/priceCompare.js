let puppeteer = require("puppeteer");
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
const { contains } = require("cheerio");
// const request = require("request");

let links = ["http://www.amazon.in","https://www.flipkart.com","https://paytmmall.com"];

let pName = process.argv[2];

console.log("Before");

(async function(){
    try{
        let browserInstance = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let AmazonArr = getListingFromAmazon(links[0],browserInstance,pName);
        console.table(AmazonArr);
        let FlipkartArr = getListingFromFlipkart(links[1],browserInstance,pName);
        console.table(FlipkartArr);
        let PayTmMallArr = getListingFromPaytmMall(links[2],browserInstance,pName);
        console.table(PayTmMallArr);
    }
    catch(err){
        console.log(err);
    }
})();


function consoleFn(nameSelector,priceSelector){
    let nameArr = document.querySelectorAll(nameSelector);
    let priceArr = document.querySelectorAll(priceSelector);
    let details = [];
    for(let i=0;i<5;i++){
        let name = nameArr[i].innerText;
        let price = priceArr[i].innerText;
        details.push({
            price: price,
            name: name
        });
    }
    return details
}


// product name, url of amazon home page
// output -> top 5 matching product -> price name print
async function getListingFromAmazon(link,browserInstance,pName){
    let AmazonTab = await browserInstance.newPage();
    await AmazonTab.goto(link);
    await AmazonTab.type("#twotabsearchtextbox",pName,{delay:100});
    await AmazonTab.click("#nav-search-submit-button");
    await AmazonTab.waitForSelector(".a-size-medium.a-color-base.a-text-normal",{visible:true});
    await AmazonTab.waitForSelector(".a-price-whole",{visible:true});

    return AmazonTab.evaluate(consoleFn,".a-size-medium.a-color-base.a-text-normal",".a-price-whole");
}


async function getListingFromFlipkart(link,browserInstance,pName){
    let FlipkartTab = await browserInstance.newPage();
    await FlipkartTab.goto(link);
    await FlipkartTab.click("._2KpZ6l._2doB4z");
    await FlipkartTab.type("._3704LK",pName,{delay:100});
    await FlipkartTab.click("button[type='submit']");
    await FlipkartTab.waitForSelector(".s1Q9rs",{visible:true});
    await FlipkartTab.waitForSelector("._30jeq3",{visible:true});

    return FlipkartTab.evaluate(consoleFn,".s1Q9rs","._30jeq3");
}


async function getListingFromPaytmMall(link,browserInstance,pName){
    let payTmMall = await browserInstance.newPage();
    await payTmMall.goto(link);
    await payTmMall.type("#searchInput",pName,{delay:200});
    await payTmMall.keyboard.press("Enter",{delay: 100});
    await payTmMall.keyboard.press("Enter");
    await payTmMall.waitForSelector(".UGUy",{visible:true});
    await payTmMall.waitForSelector("._1kMS span",{visible:true});

    return payTmMall.evaluate(consoleFn,".UGUy","._1kMS span");
}