var axios = require("axios");

module.exports = {
    findMovie: function (movie) {

        if (movie === "") {
            movie = "Mr. Nobody";
        };
        var url = `http://www.omdbapi.com/?t=${movie}&y=&plot=full&tomatoes=true&apikey=trilogy`;

        axios.get(url).then(
            function (res) {
                var jsonData = res.data;

                console.log("Title: " + jsonData.Title);
                console.log("Year: " + jsonData.Year);
                console.log("Rated: " + jsonData.Rated);
                console.log("IMDB Rating: " + jsonData.imdbRating);
                console.log("Country: " + jsonData.Country);
                console.log("Language: " + jsonData.Language);
                console.log("Plot: " + jsonData.Plot);
                console.log("Actors: " + jsonData.Actors);
                console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
            })


    }
};