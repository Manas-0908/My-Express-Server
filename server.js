const express =require("express");

const app = express();
app.get("/",function(request,response){

    response.send("<h1>Hello<h1>");

})

app.get("/contact",function(req,res){
    res.send("contact me at:manas.jha1991@gmail.com");
})

app.listen(3000,function(){
    console.log("server started on port 3000");
});

app.get("/about",function(req,res){
    res.send("aur bhidu kya haal apun ka naam jaan le manas");
})

app.get("/hobbies",function(req,res){
    res.send("<ul><li>novel</li><li>Code</li><li>cycling</li></ul>");
})