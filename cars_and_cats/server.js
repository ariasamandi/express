// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.get("/cars", function (request, response){
    response.render('cars');
})
app.get("/cats", function (request, response){
    response.render('cats');
})
app.get("/form", function (request, response){
    response.render('form');
})
app.get("/cat1", function (request, response){
    // hard-coded user data
    var users_array = 
        {
            img: "/kelso.jpg",
            name: "kelso",
            food: "kibble",
            age: "12",
            sleeping_spot: ["bed", "in the bathtub", "on top of humans"]

        };
    response.render('details', {details: users_array});
})
app.get("/cat2", function (request, response){
    // hard-coded user data
    var users_array = 
        {
            img: "/Siamese.jpg",
            name: "april",
            food: "rice",
            age: "2",
            sleeping_spot: ["closet", "on top of the coffee table"]

        };
    response.render('details', {details: users_array});
})
app.get("/cat3", function (request, response){
    // hard-coded user data
    var users_array = 
        {
            img: "/vamp-1.jpg",
            name: "simba",
            food: "kibble",
            age: "4",
            sleeping_spot: ["floor", "under the couch"]

        };
    response.render('details', {details: users_array});
})
app.get("/cat4", function (request, response){
    // hard-coded user data
    var users_array = 
        {
            img: "/bath.jpg",
            name: "jesse",
            food: "meat",
            age: "13",
            sleeping_spot: ["on clothes", "in his dog bed", "under the couch", "under tables", "on the bottom row of my glass shelf thing"]

        };
    response.render('details', {details: users_array});
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
