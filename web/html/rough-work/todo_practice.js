$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	// alert("clicked ona span");
});
	event.stopPropagation();
});

$('input[type="text"]').on("keypress",function(event){
	if(event.which === 13){
		// li.append(input.val());
		var inputVal = $(this).val();
		// clear th input.
		$(this).val("");
		$("ul").append("<li><span>X</span> " + inputVal + "</li>")
	}
});