var express = require("express");
var app = express();
const cognitiveServices = require('cognitive-services');

app.get("/", function(req, res){
    res.send("Hello there!");
});

app.get("/ai", function(req, res) {
    const SATYA_NADELLA_IMAGE_URL = "http://s3.amazonaws.com/digitaltrends-uploads-prod/2014/02/Satya-Nadella-quotes.jpg";

    const personGroupId = "test-12344321";
    var personId = null;

    const face = new cognitiveServices.face({
        endpoint: "https://uksouth.api.cognitive.microsoft.com/",
        apiKey: "e81529b09c7643fd8780cf8ba1aa33db"
    });

    var parameters = {
        "personGroupId": personGroupId
    };
    var body = {
        "name": personGroupId
    };

    face.createAPersonGroup({
        parameters,
        body
    }).then(response => {        
        // create a person
        body = {
            "name": "johndoe"
        }
        parameters = {
            'personGroupId': personGroupId
        }

        return face.createAPerson({
            parameters,
            body
        })
    }).then(response => {
        console.log(response);
        res.send(response);
    }).catch(error => {
        console.log(error);
        res.send(error);
    });
});

app.listen(3000, function(){
    console.log("Server is listening!");
});