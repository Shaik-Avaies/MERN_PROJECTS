let puppeteer = require("puppeteer");

let browserPromise = puppeteer.launch({
    headless: false,
    // args: ["--start-maximized","--incognito"]
});

console.log(browserPromise);

let hackerRankTab;

browserPromise
.then(function(browser){
    let tabsArrPromise = browser.pages();
    return tabsArrPromise;
})
.then(function(tabArr){
    hackerRankTab = tabArr[0];
    let goToHackerRankPromise = hackerRankTab.goto("https://www.hackerrank.com/auth/login");
    return goToHackerRankPromise;
})
.then(function(){
    let userNamePromise = hackerRankTab.type("#input-1","wejirok443@shzsedu.com",{delay: 0});
    return userNamePromise
})
.then(function(){
    let passWordPromise = hackerRankTab.type("#input-2","Lpu@1234",{delay: 0});
    return passWordPromise
})
.then(function(){
    let loginWillBeClickedPromise = hackerRankTab.click("button[data-analytics='LoginPassword']");
    return loginWillBeClickedPromise;
})
.then(function(){
    let selector = ".card-content h3[title='Interview Preparation Kit']";
    let IPKitPromise = waitAndClick(selector);
    return IPKitPromise;
})
.then(function(){
    let selector = "a[data-attr1='warmup']";
    let wrapUpPromise = waitAndClick(selector);
    return wrapUpPromise;
})
.then(function(){
    return hackerRankTab.url();
})
.then(function(url){
    let questionObj = codes[0];
    questionSolver(url,questionObj.solution,questionObj.qName);
})
.catch(function(err){
    console.log(err);
})



//         // let loginButtonClickPromise = hackerRankTab.click("button[data-analytics='LoginPassword']");
//         // let waitForNavigationPromise = hackerRankTab.waitForNavigation({ waitUntil: "networkidle0" });
//         // let selectorPromise = hackerRankTab.waitForSelector("h3[title='Interview Preparation Kit']",{visible: true});
//         // let combinedPromise = Promise.all([loginButtonClickPromise, waitForNavigationPromise,selectorPromise]);
//         // return combinedPromise



function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let selectorWaitPromise = hackerRankTab.waitForSelector(selector,{visible: true});
        selectorWaitPromise
        .then(function(){
            let selectorClickPromise = hackerRankTab.click(selector);
            return selectorWaitPromise;
        })
        .then(function(){
            resolve();
        })
        .catch(function(){
            reject();
        })
    })
}

    

function questionSolver(modulePageUrl,code,questionName){
    return new Promise(function(resolv,reject){
        //page visit
        let reachPageUrlPromise = hackerRankTab.goto(modulePageUrl);
        reachPageUrlPromise
        .then(function(){
            function browserConsoleFun(questionName){
                let allH4Elem = document.querySelectorAll("h4");
                let textArr = [];
                for(let i=0;i<allH4Elem.length;i++){
                    let myQuestion = allH4Elem[i].innerText.split("\n")[0];
                    textArr.push(myQuestion);
                }
                let idx = textArr.indexOf(questionName);
                console.log(idx);
                allH4Elem[idx].click();
            }
            let pageClickPromise = hackerRankTab.evaluate(browserConsoleFun,questionName);
        })
    })
}
