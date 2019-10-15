// dependencies required to run
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Setting port for localhost
var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes")

