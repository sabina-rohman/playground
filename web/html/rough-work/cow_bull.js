var playing = true;

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

function playCowGame(hiddenWord) {
	var retryCount = 0;
	while(playing){
		var userWord = $("input").val();
		var counts = isCowBull(userWord, hiddenWord);
		var cowCount = counts[0];
		var bullCount = counts[1];

		retryCount += 1;
		if(cowCount === 4) {
			console.log("You won." + " " + retryCount + " attempts were taken.");
			playing = false;
		} else {
			console.log(cowCount + ": cow" + ", " + bullCount + ": bull");
		}
	}
}


playCowGame("1035");
