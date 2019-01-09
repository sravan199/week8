var express=require('express');
//var http=require('http');
var BodyParser=require('body-parser');
var  moviesList=require('./movieList.json');
var app=express();

app.use(BodyParser.json({limit :'10mb'}));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
})


app.get("/",function(req,res){
    res.json(moviesList);
});


app.get("/bookmovie/:movie",function(req,res){

    let moviename=req.params.movie;
   // let body=req.body;
   // url=req.originalUrl;
   // console.log(url,req.params.movie);

    let index=moviesList.findIndex(x=>(x.title==moviename))
if(index!=-1){
    var arr=[];
    arr[0]={movie:moviesList[index]};
    arr[1]={success:true};
    res.json(arr);
}
else{
    moviesList[0].success=false;
    res.send("movie doesn't exist ");
}
});


app.all('*',(req,res)=>{ 
    res.end(" 404 error ");
    });




app.listen(5000,function(){
    console.log("you are listening to port 5000");
})