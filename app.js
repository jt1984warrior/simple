var express=require('express');
//var Addition=require('./modules/Addition.js');
var Numeric=require('./modules/Numeric.js');
var app=express();
app.set('view engine','jade');
app.get('/',function(req,res)
{

    var tut = new Numeric.Numeric();  // Create and save object
//tut.perform();  // Call function on object
    console.log("Hi JT!!!"+Numeric.Numeric());
    console.log("Hi JT!!!"+tut.perform());
});
var server=app.listen(3000,function()
{
});