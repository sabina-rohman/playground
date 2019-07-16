var body = document.querySelector("body");

var isPink = false;

setInterval(function(){
	if(isPink){
		body.style.background = "white";
	}else {
		body.style.background = "#486696";
	}
	isPink = !isPink;
}, 1000);