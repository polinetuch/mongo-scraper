var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
    return axios.get("https://techcrunch.com").then(function(res) {
        var $ = cheerio.load(res.data);
        console.log("It's scraping");

        var allArticle = [];
    })
}