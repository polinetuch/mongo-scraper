// var axios = require("axios");
// var cheerio = require("cheerio");

// var scrape = function() {
//     return axios.get("https://techcrunch.com").then(function(res) {
//         var $ = cheerio.load(res.data);
//         console.log("It's scraping");

//         var allArticle = [];

//         $(".post-block__title__link").each(function(i, element) {
//             // get the headline of the article
//             var headline = $(this).find("h2").text().trim();

//             // get the article url
//             var url = $(this).find("a").attr("href");

//             // get the summary of the allArticle
//             var summary = $(this).find().trim();

//             if (headline && summary && url) {

//                 var makeTitleNeat = headline.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
//                 var makeSummaryNeat = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

//                 var dateToAdd = {
//                     headline: makeTitleNeat,
//                     summary: makeSummaryNeat,
//                     url: "https://techcrunch.com" + url
//                 };
//                 allArticle.push(dateToAdd);
//             }
//         });
//         return allArticle;
//     });
// };

// module.exports = scrape;