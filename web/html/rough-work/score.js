var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winningScore = 5;
var resetButton = document.getElementById("resetButton");
var numinput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

p1.addEventListener("click", function(){
	if(!gameOver){
		p1Score += 1;
		if(p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("green");
		}
		p1Display.textContent = p1Score;
	}
});

p2.addEventListener("click", function(){
	if(!gameOver){
		p2Score += 1;
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("green");
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Score = 0;
	p2Score = 0;
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
	gameOver = false;
}

numinput.addEventListener("change", function(){
	winningScore = Number(this.value);
	winningScoreDisplay.textContent = this.value;
	reset();
});