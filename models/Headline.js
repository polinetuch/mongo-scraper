// require mongoose to store data
var mongoose = require("mongoose");

// creating schema
var Schema = mongoose.Schema;

var headlineSchema = new Schema({
    headline: {
        type: String,
        required: true
    },

    summary: { 
        type: String,
        required: true
    },

    url: { 
        type: String,
        required: true,
    },

    saved: { 
        type: Boolean,
        default: false
    }
});

var Headline = mongoose.model("headline", headlineSchema);

module.exports = Headline;