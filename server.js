var parser = require('body-parser');
var enc = parser.urlencoded({
    extended: false
});
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var http = require('http');

/*
 * Schema for database
 */

var Schema = mongoose.Schema({
    id: String,
    title: String,
    eventLocation: String,
    Date: String
});


var pro = mongoose.model('pro', Schema);
var data = {
    id: "android1001",
    title: "mountains",
    eventLocation: "new Delhi",
    Date: "22 august"
};

     mongoose.connect('mongodb://aniket965:9818484049as@ds163340.mlab.com:63340/eventlists');


/* for adding data to database*/
app.get('/adddataprojects:data', enc, function (req, res) {
    var pro = mongoose.model('pro', Schema);
    
     var item = pro(finddata(req.params.data)).save(function (err) {
         if (err) throw err;

     });

});

/*finds data from the parameters*/

function finddata(data) {
     
   var itemdata =  data.split("*");
   var id = itemdata[0];
   var title = itemdata[1];
   var eventLocation = itemdata[2];
   var date = itemdata[3];
   return {id : id,
       title :title,
       eventLocation : eventLocation,
       Date :dates
    }
} 


 
var port = process.env.PORT || 1337;

 http.createServer(function(req, res) {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello World\n');
 }).listen(port);