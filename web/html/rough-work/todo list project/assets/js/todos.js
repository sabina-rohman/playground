// $('span').on('click', function(){
// 	$(this).remove()
// });

$('li').click(function(){
	$(this).toggleClass('completed');
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