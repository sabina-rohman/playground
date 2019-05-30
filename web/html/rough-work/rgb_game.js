var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


colorDisplay.textContent = pickedColor

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	//ternary operator
	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	// if(this.textContent === "Easy"){
	// 	numSquares = 3;
	// }else{
	// 	numSquares = 6;
	// }

	reset();
	//figure out how many squares to show
	//pick new colors
	//pick a new pickedColor
	//update page to reflect changes

});
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//chage colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of all squares
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "CORRECT";
			resetButton.textContent = "PLAY AGAIN?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN?";
		}
	});
}

function changeColors(color){
	//loop through squares array
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an empty array
	var arr = []
	// loop through..will generate random color num numbers of time
	for(var i = 0; i < num; i++){
		arr.push(randomColors())
	}
	//return the array
	return arr
}

function randomColors(){
	//red 
	var r = Math.floor(Math.random() * 256)
	//green
	var g = Math.floor(Math.random() * 256)
	//blue
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}