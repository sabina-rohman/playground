//create secretNumber
var secretNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess
if(guess === secretNumber){
	alert("YOU GOT IT RIGHT");
}
//otherwise, you got it wrong
else if(guess > secretNumber){
	alert("Too high.Guess again!");
}
else {
	alert("Too Low.Guess again!");
}

