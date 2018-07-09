

var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
app.post('/results', function(req, res) {
    console.log("POST DATA \n\n", req.body)
    results = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment

    }
 res.render("result", results);
})

// post route for adding a user
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
//Have the server render views/index.ejs that has the form for the user to fill out
//The user fills out the form and submits
//The submitted form gets sent to /result
//The server recognizes when someone posts things to /result, grabs information from the POST, and sends the POST data back as it renders views/results.ejs