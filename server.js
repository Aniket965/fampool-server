var parser = require('body-parser');
var enc = parser.urlencoded({
    extended: false
});
var express = require('express');
var app = express();
var mongoose = require('mongoose');

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

mongoose.connect('key');


/* for adding data to database*/



app.get('/adddataprojects:data', enc, function (req, res) {


    var pro = mongoose.model('pro', Schema);


    /**
     * saves in database
     */
 var isDatedAlready = false;
    pro.find({}, function (err, datapro) {
        if (err) throw err;
        for (var i = 0; i < datapro.length; i++) {
            if (datapro[i].Date === finddata(req.params.data).Date) {

            isDatedAlready =true;
            break;

            }
        }

        if(isDatedAlready != true) {
             var item = pro(finddata(req.params.data)).save(function (err) {
                    if (err) throw err;
                    console.log(finddata(req.params.data))
                });
        }

    });



});




/*finds data from the parameters*/

function finddata(data) {

    var itemdata = data.split("*");
    var id = itemdata[0];
    var title = itemdata[1];
    var eventLocation = itemdata[2];
    var date = itemdata[3];
    return {
        id: id,
        title: title,
        eventLocation: eventLocation,
        Date: date
    }
}




function filterdata(data) {



}

/**
 * listens the port on server
 */


var port = process.env.PORT || 1337;
app.listen(port);
