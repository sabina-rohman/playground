//create secretNumber
var secretNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number?"));

//check guess is right
if(guess === secretNumber){
	alert("You have guessed correctly");
}
else if(guess < secretNumber){
	alert("You got it too low");
}
else{
	alert("You got it too high");
}

