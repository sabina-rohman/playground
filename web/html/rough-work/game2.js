var userNumber = Number(prompt("Choose a number"));
var realNumber = 4;

if(userNumber === realNumber){
	alert("Yay! It's correct");
}
else if(userNumber < realNumber){
	alert("It is less than the number");
}
else if(userNumber > realNumber){
	alert("It is more than the number");
}
