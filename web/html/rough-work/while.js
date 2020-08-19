console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var num = -10;

while(num < 20){
	console.log(num);
	num++;
}


console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");
var num = 10;

while(num <= 40){
	if(num%2 === 0){
	console.log(num);
	}
	num++;
}

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
var num = 300;

while(num <= 333){
	if(num%2 !== 0){
	console.log(num);
	}
	num+=1;
}


console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var counter = 5;

while(counter <= 50){
	if(counter%3 === 0 && counter%5 === 0){
		console.log(counter);
	}
	counter++;
}

