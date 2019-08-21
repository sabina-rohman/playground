$("h1").mouseover(function(){
	$(this).addClass("red");
});

$("h1").mouseleave(function(){
	$(this).removeClass("red");
});

$("button").click(function(){
	var text = $(this).text();
	$("#replace").text(text);
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		console.log($(this).val());
		$(this).val("");
	}
	
});