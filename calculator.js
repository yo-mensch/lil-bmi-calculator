const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
    //console.log(__dirname + "/index.html");
})

app.post("/", function(req, res){
    //console.log(req.body);
    var weight = Number(req.body.kilos);
    var height = Number(req.body.cms);

    var bmi = weight/((height/100)*(height/100));
    res.send("Your BMI is "+bmi);
})

app.listen(3500, function(){
    console.log("Server started on port 3500");
})