var express = require('express');
var app = express();

app.post("/test/",function(req, res, next){
    res.send("blackhawks");
})

app.listen(9090,function(){
    console.log("hehe sunami");
})