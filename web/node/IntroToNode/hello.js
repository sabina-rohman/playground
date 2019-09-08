var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/turtle_app", {useNewUrlParser : true});

var turtleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Turtle = mongoose.model("Turtle", turtleSchema);

// Turtle.create({
//     name: "Bichra Baap",
//     age: 80,
//     temperament: "Old and grumpy"
// }, function(err, turtle){
//     if(err){
//         console.log("Oh no error!");
//         console.log(err);
//     } else {
//         console.log("All the turtles");
//         console.log(turtle);
//     }
// });

Turtle.find({}, function(err, turtles){
	if(err){
		console.log("Oh no error!");
		console.log(err);
	} else {
		console.log("All the turtles");
		console.log(turtles);
	}
});