var express=require ("express");
var app =express();
var path =require ("path");
var fs=require("fs");

app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/hello.html'));
})

app.get('/hello', function (req, res) {
    console.log("CAlling rest api");
    var person={firstName:'Vaibhav',lastName:'Varade',age:25,hobby:"potty"};
    res.send(person);
  });
  
   
  var server = app.listen(8081);
  console.log("server is started at 8081");