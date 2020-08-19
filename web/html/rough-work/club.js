var age = prompt("What is your age?")

if(age < 0){
	console.log("You can come after you're out of womb");
}
else if(age === 21){
	console.log("Happy 21st birthday!");
}
else if(age % 2 !== 0){
	console.log("Your age is odd!");
}
else if(age % Math.sqrt(age) === 0){
	console.log("You age is perfect square!");
}