$("#userInput").on("keypress", function(event){
	if(event.which === 13){
		var text = $(this).val();
		$("#userOutput").text(text);
	}
});