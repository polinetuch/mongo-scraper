// dependencies required to run
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Setting port for localhost
var PORT = process.env.PORT || 3000;

var app = express();

// require routes
var routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//request to go through route middleware
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo database
mongoose.connect(MONGODB_URI);

// app is listening on the port
app.listen(PORT, function() {
  console.log("Listening on http://localhost:" + PORT);
});
