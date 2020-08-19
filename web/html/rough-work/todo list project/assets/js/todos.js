// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//Click on X to delete todo
$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(500, function(){
				$(this).remove();
		});
		event.stopPropagation();
});



$("input[type='text']").keypress(function(event){
		if(event.which === 13){
			// grabbing new todo text from input
			var todoText = $(this).val();
			//val("") acts as setter rather than a getter
			$(this).val("");
			//create a new li and add to ul
			$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText+ "</li>");
		}
});

// $('li').click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 		color:"black",
// 		textDecoration: "none"
// 	});	
// 	}
// 	else{
// 		$(this).css({
// 		color:"gray",
// 		textDecoration: "line-through"
// 	});
// 	}
	
// });

// CSS property to use camel casing like textDecoration instead of text-decoration as we use define an object.we have to use objects syntax.


$(".fa-plus").click(function(){
	$('input[type="text"]').fadeToggle();
})