var express=require('express');
var http=require('http');
var BodyParser=require('body-parser');

var app=express();

app.use(BodyParser.json({limit :'10mb'}));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
})

app.get("/",function(req,res){

    let routeParameters ={
        host:'localhost',
        port:5000,
        path:req.originalUrl
    }

    http.get(routeParameters,function(response){
        var data="";
        response.on('data', (chunk) => {
            // response.setEncoding('utf8');
             data += chunk;
        });
        
        response.on('end', () => {
           // console.log(data +" data received from microservice1 ");
            res.send(data);   
        });

    }).on('error', function(error) {
            console.log("Got error: " + error.message);
        });
});


app.get("/bookmovie/:movie",function(req,res){
    let routeParameters ={
        host:'localhost',
        port:5000,
        path:req.originalUrl
    }    
    http.get(routeParameters,function(response){
        var data="";
        response.on('data', (chunk) => {
            // response.setEncoding('utf8');
             data += chunk;
        });
        
        response.on('end', () => {
           // console.log(data +" data received from microservice1 ");
            res.send(data);   
        });

    }).on('error', function(error) {
            console.log("Got error: " + error.message);
        });
})


app.all('*',(req,res)=>{ 
    res.end(" 404 error ");
    });


app.listen(3000,function(){
    console.log("you are listening to port 3000");
})