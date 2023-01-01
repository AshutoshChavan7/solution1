var express=require ("express");
var app =express();
var path =require ("path");
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/hello.html'));
})

var server = app.listen(8000);
console.log("server is started at 8000");