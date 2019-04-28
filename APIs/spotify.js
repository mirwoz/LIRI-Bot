var Spotify = require('node-spotify-api');
var keys = require("../keys");
var spotify = new Spotify(keys.spotify);

module.exports = {

    findSong: function (songName) {



        if (songName === "") {
            songName = "The Sign";
        };

        spotify.search({
            type: 'track',
            query: songName
        }).then(function (response) {
            let b = response.tracks.items
            b.forEach(element => {
                console.log(`${element.album.artists[0].name} | ${element.name}`)
            });
        })
    }
};