// require mongoose to store data
var mongoose = require("mongoose");

// creating schema
var Schema = mongoose.Schema;

var headlineSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: { index: { unique: true }}
    },

    summary: { 
        type: String,
        required: true
    },

    url: { 
        type: String,
        unique: true,
    },

    saved: { 
        type: Boolean,
        default: false
    }
});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = headlineSchema;