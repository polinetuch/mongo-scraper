// dependencies required to run
var express = require("express");
var logger = require("morgan")
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

// Setting port for localhost
var PORT = process.env.PORT || 3000;

var app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//request to go through route middleware
// app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo database
mongoose.connect(MONGODB_URI);

app.get("/scrape", function(req, res) {

  axios.get("https://techcrunch.com/").then(function(response) {
    
    var $ = cheerio.load(response.data);

    $(".post-block__title__link").each(function(i, element) {

      var result = [];

      result.title = $(this).children("a").text();

      result.link = $(this).attr("href");

      db.mongoHeadlines.create(result).then(function(dbArticle) {
       
        console.log(dbArticle);

      }). catch(function(error) {

        console.log(error)

      });

    });

    res.send("Scrape Complete");
  });
})

// app is listening on the port
app.listen(PORT, function() {
  console.log("Listening on http://localhost:" + PORT);
});
