
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client'));



// app.listen(3000 || process.env.PORT,function(){
//     console.log("up and running on port "+process.env.PORT);
// }); 

app.listen(process.env.PORT || 8000 ,function(){
    console.log("up and running on port "+ process.env.PORT);
});


// app.listen(8000, function() {
//   console.log('listening on port 8000!');
// });

 