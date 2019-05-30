var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")
var winnerScore = 5
var gameOver = false;
var resetButton = document.querySelector("#reset");

p1.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winnerScore){
			p1Display.classList.add("winner")
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
	});

p2.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winnerScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
	

}

numInput.addEventListener("change", function(){
	// Number(numInput.value) = winnerScore;
	winningScoreDisplay.textContent = this.value;
	winnerScore = Number(this.value);
	reset();
});