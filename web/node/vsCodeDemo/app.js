var express = require('express');
var app = express();

// view engine setup
app.set('view engine', 'ejs');


// ROUTES
app.get("/", function(req, res){
	res.render("index");
});

module.exports = app;