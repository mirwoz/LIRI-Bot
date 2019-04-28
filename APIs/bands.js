var axios = require("axios");
var moment = require("moment");

module.exports = {

    findShow: function (artist) {
        var URL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`
        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            var concertData = [
                "Venue: " + jsonData[0].venue.name,

                "Venue Location: " + jsonData[0].venue.city,


                "Event Date: " + moment(jsonData.datetime).format("MM/DD/YYYY")

            ].join("\n\n");

            console.log(concertData);
        })
    }
}