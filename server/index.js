
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))
// parse application/json 
app.use(bodyParser.json())
// var connection = require('../database-mysql'); 

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));





app.listen(8000, function() {
  console.log('listening on port 8000!');
});

 