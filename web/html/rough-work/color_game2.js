var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");
var modebuttons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modebuttons.length; i++){
	modebuttons[i].addEventListener("click", function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		//ternary operator
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

function setupSquares(){
	for(var i =0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
			message.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
			}
		});
	}

}

function reset(){
	colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		message.textContent = "";
		resetButton.textContent = "New Colors";
		//change colors of squares
		for(var i = 0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}else {
				squares[i].style.display = "none";
			}
		}
		h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
		//generate all new colors
		reset();
});


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " +  b + ")";
}