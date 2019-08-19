var playing = true;
var hiddenWord = pickRandomNumber();
var heartsLeft = 3;

function isCowBull(userWord, hiddenWord) {
	var cowCount = 0;
	var bullCount = 0;
	for(var i = 0; i < userWord.length; i++){
		if(userWord[i] === hiddenWord[i]) {
			cowCount += 1;
		} else if(hiddenWord.includes(userWord[i])){
			bullCount += 1;
		}
	}
	return [cowCount, bullCount];
}

$( document ).ready(function() {
	// Add all the heart in the begining
    for(var i = 0; i < heartsLeft; i++){
    	// step1: Dynamically create the id of each heart. eg: "heart-0, heart-1 etc"
    	var idVal = "heart-" + String(i); 
    	// step2: Append a new heart with a given id
    	$("#hearts").append("  "+ "<i id='"+ idVal + "' class='fas fa-heart'></i>" + " ");
    }
});

$("#userInput").on("keypress", function(event){
	// step1: wait for user to click enter
	if(event.which === 13){
		// step2: Get the number the user gave and store it in userWord
		var userWord = $(this).val();
		// step3: Call the isCowBull helper method which gives the outcome of the game and store it in variable counts
		var counts = isCowBull(userWord, hiddenWord);
		// step4: // Counts is an array with 2 values. First value is no of cows. Second value is no of bulls
		var cowCount = counts[0];
		var bullCount = counts[1];
		// step5: Calculate the result
		var result = ""
		if(cowCount === 4) {
			result = "You won.";
			// $(result).addClass(cow);
		} else {
			result = "Try Again! The hidden number is: " + hiddenWord;
			$("#cowDisplay").text(cowCount);
			$("#cowDisplay").addClass("cow");
			$("#bullDisplay").text(bullCount);
			$("#bullDisplay").addClass("bull");
			$(this).val("");
		}
		
		// step7: Increase the game counter by 1
		heartsLeft -= 1;
		// stap8: Update the no of trial in the html
		// $("#noOfTrial").text(noOfTrial);
		$("#heart-" + String(heartsLeft)).remove();
		if(heartsLeft === 0){
			result = "You Lost!"
		}
		// step6: Display the result in the output
		$("#userOutput").css("display", "block");
		$("#userOutput").text(result);
	}	
});

$("button").on("click",function(){
	$("#noOfTrial").text("");
	$("#cowDisplay").text("");
	$("#cowDisplay").addClass("cow");
	$("#bullDisplay").text("");
	$("#bullDisplay").addClass("bull");
	cowCount = 0;
	bullCount = 0;
	$("#userOutput").css("display", "none");
});

function pickRandomNumber(){
	var random = Math.floor(Math.random() * 9999);
	return String(random);
}