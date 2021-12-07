
const express = require("express");

const app = express();
const first = require(`./first`)
console.log(first())


app.get("/", function(req, res){
    res.send("Welcome to Masai")
});

app.get("/about", function(req, res){
    res.send("Masai is a coding bootcamp school")
});

app.get("/contact", function(req, res){
    res.send("If you want to become a software developer in 30 weeks, contact us Masai School.")
});

app.get("/data", function(req, res){
    res.sendFile(__dirname+"/MOCK_DATA.json")
});


app.listen(5000, function(req, res){
    console.log("server is running at port no.5000");
});
