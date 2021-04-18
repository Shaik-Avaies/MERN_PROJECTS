let puppeteer  = require("puppeteer");

// headless is used to make browser visible
// it is by default set as true ==> which means browser is not visible
// Need to make it false to make browser visible

let browserPromise = puppeteer.launch({ headless: false });


console.log(browserPromise);

// let Gtab;



// browserPromise
//     .then(function(browser){
//         let newTabPromise = browser.newPage();
//         newTabPromise
//             .then(function(newTab){
//                 let goToGooglePromise = newTab.goto("https://google.com");
//                 goToGooglePromise
//                     .then(function(){
//                         let textWillBeTypedPromise = newTab.type("input[aria-label='Search']","Pepcoding",{delay:100});
//                         textWillBeTypedPromise
//                             .then(function(){
//                                 let enterWillBePressedPromise = newTab.keyboard.press("Enter");
//                                 enterWillBePressedPromise
//                                     .then(function(){
//                                         console.log("pepcoding Searched");
//                                     })
//                             })
//                     })
//             })
//     })



let gTab;

browserPromise
    .then(function(browser){
        let newTabPromise = browser.newPage();
         return newTabPromise
    })
    .then(function(newTab){
        gTab = newTab;
        let goToGooglePromise = newTab.goto("https://google.com");
        return goToGooglePromise
    })
    .then(function(){
        let textWillBeTypedPromise = gTab.type("input[aria-label='Search']","Pepcoding",{delay:100});
        return textWillBeTypedPromise
    })
    .then(function(){
        let enterWillBePressedPromise = gTab.keyboard.press("Enter");
        return enterWillBePressedPromise
    })
    .then(function(){
        console.log("pepcoding Searched");
    })



