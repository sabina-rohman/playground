var express = require('express'),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
app = express(),
mongoose = require("mongoose"),
bodyParser = require("body-parser");

// view engine setup
mongoose.connect("mongodb://localhost/blog_app", {useNewUrlParser : true});
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(express.static("public"));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "Second Post",
//   image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   body:"Coolest Dog on planet",
// });

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

// NEW ROUTE
app.get("/blogs/new", function(req, res){
  res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
  // sanitize the blog.body
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function(err, newBlogs){
    if(err){
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  })
});


// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.render("show", {blog: foundBlog});
    }
  });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
      if(err){
        res.redirect("/blogs");
      } else {
        res.render("edit", {blog: foundBlog});
      }
  });
});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
  // sanitize the blog.body
  req.body.blog.body = req.sanitize(rew.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
  Blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs");
    }
  });
});

module.exports = app;
