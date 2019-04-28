require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var spotify = require("./APIs/spotify");
var moment = require("moment");
var omdb = require("./APIs/omdb");
var bands = require("./APIs/bands")

var param = process.argv[2];

run = function (argOne, argTwo) {
    eval(argOne, argTwo)
};

run(process.argv[2], process.argv.slice(3).join(" "))

function eval(caseArg, param) {
    switch (caseArg) {
        case "spotify-this-song":

            spotify.findSong(param)
            break;
        case "concert-this":
            bands.findShow(param)
            break;
        case "movie-this":
            omdb.findMovie(param)
            break;
        case "fs-this":
            doWhatItSays();
            break;
        default:
            console.log("Whoops! There was an error ");
            break
    }
}



function doWhatItSays() {
    fs.readFile("./random.txt", "utf-8", function (err, data) {

        var songArr = data.split(",");

        if (songArr.length === 2) {
            eval(songArr[0], songArr[1]);
        } else if (songArr.length === 1) {
            eval(songArr[0]);
        }


    })
}



