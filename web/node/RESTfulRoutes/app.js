var express = require('express');
var app = express();
var mongoose = require("mongoose");

// view engine setup
mongoose.connect("mongodb://localhost/blog_app", {useNewUrlParser : true});
app.set('view engine', 'ejs');

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema)

Blog.create({
  name: "First Post",
  image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  body:"Cutest Dog on planet",
});

// ROUTES
app.get("/", function(req, res){
	res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});

module.exports = app;
