$("#getBtn").click(function(){
	$.get('https://baconipsum.com/api/?type=meat-and-filler/')
	.done(function(data){
		console.log(data);
	})
	.fail(function(){
		console.log("ERROR")
	})
});

$("#postBtn").click(function(){
	var data = {name: 'Charlie', city: 'Florence'};
	$.post("www.catsarcoolandsoaredogs", data)
	.done(function(data){
		console.log("hi");
	})
	.fail(function(){
		console.log("ERROR")
	});
});

$("#getJSONBtn").click(function(){
	$.getJSON('https://baconipsum.com/api/?type=meat-and-filler/')
	.done(function(data){
		console.log(data);
	})
	.fail(function(){
		console.log("ERROR");
	})
});