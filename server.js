const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");


const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended :true}))
app.get("/",function(req,res){
    //console.log(req);
    res.send("hello");



});
let aboutContent="hello"
app.get("/rated", function(req, res){
    res.render("rated", {aboutContent: aboutContent});
});
  
app.get("/rate", function(req, res){
    res.render("rate", {contactContent: contactContent});
});
  
app.get("/chat", function(req, res){
    res.render("chat");
});
app.get("/chat", function(req, res){
    res.render("chat");
});
  
app.post("/profile",function(req,res){
    res.render("profile");


})
app.get("/contact",function(req,res){
    //console.log(req);

    res.send("<h1>If you are a girl then only contact me </h1>");

});
app.listen(3000,function(){
    console.log("hello");
});