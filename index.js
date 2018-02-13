//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var app = express();

    app.use(myParser.json({extended : true}));
    app.post("/hometrack-test-vijayraghunath.herokuapp.com", function(request, response) {
        console.log(request.body);
        // TODO Parse the JSON structure to frame the response.
        response.send(“Thank you, received your JSON post request. Check the README FOR file.")
     });

//Start the server and make it listen for connections on port 8080
app.listen(8080);