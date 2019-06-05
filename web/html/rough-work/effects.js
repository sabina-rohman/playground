// $("button").on("click", function(){
// 	$("div").fadeOut(1000,function(){
// 		$(this).remove();
// 	});
// });
	

// $("button").on("click", function(){
// 	$("div").fadeIn(1000, function(){

// 	});
// });	

$("button").on('click', function(){
	$("div").slideToggle(1000, function(){
		$(this).remove();
	});
});

$("button").on('click', function(){
	$("div").slideUp(1000)
	});