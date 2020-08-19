$("h1").mouseover(function(){
	$(this).addClass("red");
});

$("h1").mouseleave(function(){
	$(this).removeClass("red");
});

$("button").on("mouseover",function(){
	var text = $(this).text();
	$("#replace").text(text);
	$("#pic").attr("src", "https://cdn.pixabay.com/photo/2017/02/01/00/27/boom-2028563__340.png");
});

$("button").on("mouseout", function(){
	$("#pic").attr("src", "");
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var inputText = $(this).val();
		$("#replace").prepend("<div>" + inputText + "</div>");
		$(this).val("");
		
	}
	
});

function restart(){
	$("#replace").empty();
}