//picasso sample db serverice for loading data from file
//in real project this can replace 
//sh.h.zadegan@gmail.com


var express = require('express');
var app = express();
var cors = require('cors');
var where = require("lodash.where");

app.use(cors());
var fs = require("fs");

app.get('/getData', function (req, res) {
    fs.readFile(__dirname + "/db/" + req.query.item + ".json", 'utf8', function (err, data) {
        try {
            filter = JSON.parse(req.query.filter);
            data = JSON.parse(data);
            var data = JSON.stringify(where(data, filter));
        } catch (e) { };
        res.end(data);
	});
});

var server = app.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Picasso2 DataService started at http://%s:%s", host, port)
})